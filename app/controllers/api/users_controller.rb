class Api::UsersController < ApplicationController

  def index
    @users = User.all
    if (name = params[:name])
      # TODO: Add separate lowercase field for indexing for this search.
      #       Add after-initialize hook in user.rb to set it to the
      #       lowercase version of the actual username.
      if name.length == 0
        @users = []
      else
        @users = @users.where("lower(username) LIKE ?", "%#{name}%")
      end
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user
      return unless require_login(@user.id)
      if @user.update(user_params)
        render :show
      else
        render status: 422, json: @user.errors.full_messages
      end
    else
      render status: 404, json: ["User not found"]
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render status: 404, json: ["User not found"]
    end
  end

end
