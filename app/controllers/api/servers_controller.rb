class Api::ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        if @server.save
            @channel = Channel.new(server_id: @server.id, channel_name: 'general')
            @channel.save
            
            render '/api/servers/new_server'
        else
            render json: @server.errors.messages, status: 418
        end
    end

    def index
        # for joining servers
        # if owner_id in params or request body
        # return owner.servers
        # else return all servers
        @servers = current_user.servers
        render '/api/servers/servers_index'
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
    end

    private

    def server_params
        params.require(:server).permit(:owner_id, :server_name)
    end
end
