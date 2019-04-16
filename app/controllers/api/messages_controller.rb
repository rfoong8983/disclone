class Api::MessagesController < ApplicationController
    def create
        message = Message.new(message_params)
        conversation = Conversation.find_by(channel_id: message_params[:conversation])
        # debugger

        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                MessageSerializer.new(message)
            ).serializable_hash

            MessagesChannel.broadcast_to conversation, serialized_data
            head :ok
        end
    end

    private
    
    def message_params
        params.require(:message).permit(:conversation_id, :user_id, :text)
    end
end
