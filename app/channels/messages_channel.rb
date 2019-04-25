class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # conversation = Conversation.find(params[:conversation]) if params[:conversation]
    conversation = Conversation.find(params[:conversation])
    # stream_for conversation if conversation
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
