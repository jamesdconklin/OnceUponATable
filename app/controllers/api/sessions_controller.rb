class Api::SessionsController < ApplicationController
  def create
    filtered_params = user_params
    if filtered_params
      @user = User.find_by_credentials(
        filtered_params[:username],
        filtered_params[:password]
      )
      if @user
        login(@user)
        render 'api/users/show'
      else
        render json: ["Invalid username or password"], status: 401
      end
    else
      render json: ["user[username] and user[password] values required"],
             status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["No login session found to logout"], status: 404
    end
  end
end
