class Api::ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        if @server.save
            @sub = ServerSub.new(server_id: @server.id, user_id: current_user.id, username: current_user.username)
            @sub.save
            @channel = Channel.new(server_id: @server.id, channel_name: 'general')
            @channel.save
            @conversation = Conversation.new(channel_id: @channel.id)
            @conversation.save
            
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
        
        # if params[:server][:all] == "true"
        #     @servers = Server.all
        # elsif params[:server][:all].class == Array
        #     ids = params[:server][:all].map(&:to_i)
        #     # @servers = current_user.servers
        #     @servers = Server.where(:id => ids)
        # end



        # next, add subscription to server on server creation
        # add subscription to server on new user, this may be superfluous
        
        if params[:server][:all] == "false"
            # ids = params[:server][:all].map(&:to_i)
            subs = current_user.subscriptions.map do |sub|
                sub.server_id
            end
            @servers = Server.where(:id => subs)
        # elsif params[:server][:all].class == Array
        else
            @servers = Server.all
        end
        render '/api/servers/servers_index'
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
    end

    private

    def server_params
        params.require(:server).permit(:owner_id, :server_name, :all)
    end
end
