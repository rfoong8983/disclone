class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email].downcase, user_params[:password])
        # debugger
        if @user
            login!(@user)
            @home = Server.find_by(owner_id: @user.id)
            @channel = Channel.find_by(server_id: @home.id)
            # debugger
            render '/api/sessions/session'
        else
            render json: {'creds': [' - Invalid username and / or password']}, status: 418
        end
    end

    def destroy
        # debugger
        logout!
        render json: {} if !current_user
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
