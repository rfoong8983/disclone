class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # conversation = Conversation.find(params[:conversation]) if params[:conversation]
    conversation = Conversation.find(params[:conversation])
    # stream_for conversation if conversation
    # debugger
    # stream_from "conversations_channel_#{conversation.id}"
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
