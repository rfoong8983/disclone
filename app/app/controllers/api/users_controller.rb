class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.email = @user.email.downcase if @user.valid?
        # debugger
        @channel = Channel.new(server_id: nil, id: nil, channel_name: nil)
        if @user.save
            login!(@user)

            @home = Server.new(owner_id: @user.id, server_name: "#{@user.id}_@me_home")
            if @home.save
                @channel = Channel.new(server_id: @home.id, channel_name: "general")
                @channel.save
            end

            render '/api/users/show'
        else
            # debugger
            # render json: @user.errors.full_messages, status: 418
            render json: @user.errors.messages, status: 418
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
