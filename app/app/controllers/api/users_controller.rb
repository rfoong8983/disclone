class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    private

    def user_params
        params.require(:users).permit(:username, :alias, :password)
    end
end
