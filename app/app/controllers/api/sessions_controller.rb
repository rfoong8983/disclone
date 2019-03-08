class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email].downcase, user_params[:password])
        
        if @user
            login!(@user)
            @server = Server.where("server_name like '%?_@me_%'", @user.id)
                        .where("owner_id = ?", @user.id)
                        .order(id: :asc)
                        .limit(1)[0]
            
            @channel = Channel.find_by(server_id: @server.id)
            
            render '/api/sessions/session'
        else
            render json: {'creds': [' - Invalid username and / or password']}, status: 418
        end
    end

    def destroy
        
        logout!
        render json: {} if !current_user
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
