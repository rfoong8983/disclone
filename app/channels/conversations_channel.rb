class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    id = params[:convId] if params[:convId];
    stream_from "conversations_channel_#{id}"
    # stream_from "conversations_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
