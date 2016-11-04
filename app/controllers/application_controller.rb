class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # TODO enable the below in production.
  protect_from_forgery with: :exception

  def require_login(user_id = nil)
    if !current_user
      render status: :unauthorized,
             json: ["You must log in to use this method."]
      return false
    elsif user_id && current_user.id != user_id
      render status: :forbidden,
             json: ["You must be the requested asset's owner to use this method"]
      return false
    end
    true
  end

  def logout
    @current_user = nil
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  helper_method :current_user

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  private

  def user_params
    begin
      ret = params.require(:user).permit(:username, :password)
    rescue
      ret = nil
    ensure
      ret
    end
  end

end
