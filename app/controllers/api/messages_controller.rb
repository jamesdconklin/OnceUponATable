class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where(game_id: params[:game_id])
      .includes(:user)
      .order("messages.id")
      .limit(25 || params[:limit])
  end

  def create
    # debugger
    require_login
    @message = Message.new(message_params.merge(
      game_id: params[:game_id],
      user_id: current_user.id
    ))
    if @message.save
      Pusher.trigger(
        "chat_#{params[:game_id]}",
        "new_message",
        {
          id: @message.id, body: @message.body,
          result: @message.result, player: @message.user.username
        }
      )
      render :show
    else
      render json: @message.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
