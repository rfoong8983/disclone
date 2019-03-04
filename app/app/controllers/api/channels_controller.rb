class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render 'api/channels/new_channel'
        else
            render json: @channel.errors.messages, status: 418
        end
    end

    def index
        server = Server.find(params[:server_id])
        @channels = server.channels
        # @channels = Channel.all
        render 'api/channels/channels_index'
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
    end

    private

    def channel_params
        params.require(:channel).permit(:server_id, :channel_name)
    end
end
