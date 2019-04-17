class Api::ServerSubsController < ApplicationController
    def index
        @subs = current_user.subscriptions
        render 'api/subscriptions/subscriptions_index'
    end

    def create
    end

    private

    def sub_params
        params.permit(:sub).require(:user_id, :server_id)
    end
end
