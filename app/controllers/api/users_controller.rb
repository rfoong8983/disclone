class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.email = @user.email.downcase if @user.valid?
        @server = Server.new(owner_id: nil, id: nil, server_name: nil)
        @channel = Channel.new(server_id: nil, id: nil, channel_name: nil)
        if @user.save
            login!(@user)

            @server = Server.new(owner_id: @user.id, server_name: "#{@user.id}_@me_home")
            if @server.save
                @sub = ServerSub.new(server_id: @server.id, user_id: current_user.id, username: current_user.username)
                @sub.save
                @channel = Channel.new(server_id: @server.id, channel_name: "general")
                if @channel.save
                    @conversation = Conversation.new(channel_id: @channel.id)
                    @conversation.save
                end
            end

            render '/api/users/show'
        else
            render json: @user.errors.messages, status: 418
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
