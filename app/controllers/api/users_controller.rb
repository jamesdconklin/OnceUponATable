class Api::UsersController < ApplicationController

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
