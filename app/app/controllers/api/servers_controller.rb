class Api::ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        if @server.save
            render '/api/servers/new_server'
        else
            render json: @server.errors.messages, status: 418
        end
    end

    def index
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
