class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email], user_params[:password])
        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ['invalid credentials, son'], status: 418
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
