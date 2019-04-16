class Api::ConversationsController < ApplicationController
    def index
        conversations = [Conversation.find_by(channel_id: params[:channel_id].to_i)]
        render json: conversations unless conversations.nil?
    end

    def create
        conversation = Conversation.new(conversation_params)
        # debugger
        if conversation.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                ConversationSerializer.new(conversation)
            ).serializable_hash

            ActionCable.server.broadcast 'conversations_channel', serialized_data
            head :ok
        end
    end

    private

    def conversation_params
        params.require(:conversation).permit(:channel_id)
    end
end
