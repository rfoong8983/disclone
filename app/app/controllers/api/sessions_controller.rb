class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email].downcase, user_params[:password])
        # debugger
        if @user
            login!(@user)
            # @home.select where owner_id: @user.id
            #     and server_name: contains '@me'
            #     order by id
            #     limit 1;
            # @home = Server.find_by(owner_id: @user.id)
            # debugger

            @server = Server.where("server_name like '%?_@me_%'", @user.id)
                        .where("owner_id = ?", @user.id)
                        .order(id: :asc)
                        .limit(1)[0]
            
            @channel = Channel.find_by(server_id: @server.id)
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
