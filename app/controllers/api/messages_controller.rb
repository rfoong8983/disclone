class Api::MessagesController < ApplicationController
    def create

        message = Message.new(message_params)
        conversation = Conversation.find_by(channel_id: message_params[:conversation_id])

        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                MessageSerializer.new(message)
            ).serializable_hash

            

            # ActionCable.server.broadcast("conversations_channel_#{conversation.id}", serialized_data[:message][:text])
            MessagesChannel.broadcast_to conversation, serialized_data
            head :ok
        end
    end

    private
    
    def message_params
        params.require(:message).permit(:conversation_id, :user_id, :text, :username)
    end
end
