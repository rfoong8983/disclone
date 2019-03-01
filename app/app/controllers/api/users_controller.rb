class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.email = @user.email.downcase if @user.valid?
        if @user.save
            login!(@user)
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
