class Api::PlayersController < ApplicationController
  before_action :require_login

  def create
    @signup = GameSignup.new(game_signup_params)
    if @signup.game.gm == current_user || @signup.user == current_user
      if @signup.save
        render json: @signup
      else
        render status: :unprocessable_entity,
               json: @signup.errors.full_messages
      end
    else
      render status: :forbidden,
             json: ["You can't sign up another user to non-owned games"]
    end
  end

  def destroy
    @signup = GameSignup.find_by(game_signup_params)
    if @signup
      if @signup.game.gm == current_user || @signup.user == current_user
        @signup.destroy
        render json: @signup
      else
        render json: ["You aren't authorized to delete the requested signup"],
               status: :forbidden
      end
    else
      render json: ["Requested signup not found"], status: :not_found
    end
  end

  def game_signup_params
    ret_params = { game_id: params[:game_id] }
    begin
      ret_params.merge!(params.require(:game_signup).permit(:user_id))
    rescue ActionController::ParameterMissing
      ret_params.merge!(user_id: params[:id] || current_user.id)
    end
    ret_params
  end
end
