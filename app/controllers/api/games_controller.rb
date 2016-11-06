class Api::GamesController < ApplicationController
  before_filter :require_login, except: [:index, :show]

  def index
    @games = Game.all.includes(:players)
    params.each do |k, v|
      k = k.to_sym
      if k == :player_id
        @games = @games.includes(:game_signups).where(
          game_signups: { user_id: "#{v}" }
        ).references(:game_signups)
      elsif k == :gm_id
        @games = @games.where(user_id: "#{v}")
      elsif [:title, :description, :system].include?(k)
        @games = @games.where(k => "#{v}")
      end
    end
  end

  def show
    @game = Game.find_by(id: params[:id])
    if @game
      render :show
    else
      render status: :not_found,
             json: ["game with id #{params[:id]} not found"]
    end
  end

  def create
    create_params = game_params.merge(user_id: current_user.id)
    @game = Game.new(create_params)
    if @game.save
      render :show
    else
      render status: :unprocessable_entity,
             json: @game.errors.full_messages
    end
  rescue ActionController::ParameterMissing
    render status: :unprocessable_entity,
           json: {}
  end

  def update
    # debugger
    @game = Game.find_by(id: params[:id])
    if @game
      return unless require_login(@game.user_id)
      if @game.update(game_params)
        render :show
      else
        render status: :unprocessable_entity,
               json: @game.errors.full_messages
      end
    else
      render status: :not_found,
             json: ["game with id #{params[:id]} not found"]
    end
  end

  def destroy
    @game = Game.find_by(id: params[:id])
    if @game
      return unless require_login(@game.user_id)
      @game.destroy
      render :show
    else
      render status: :not_found,
             json: ["game with id #{params[:id]} not found"]
    end
  end

  private

  def game_params
    params.require(:game)
          .permit(
            :title, :system, :user_id, :description, :canvas_state,
            :canvas_delta, :active, :max_players, :current_player,
            :delta_ord, :canvas_checksum, :id
          )
  end

end
