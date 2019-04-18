class Api::ServerSubsController < ApplicationController
    def index
        @subs = current_user.subscriptions
        render 'api/subscriptions/subscriptions_index'
    end

    def create
        @sub = ServerSub.new(sub_params);
        if @sub.save
            return
            # work on creating subscription on join
        else
            render json: @server.errors.messages, status: 418
        end
    end

    private

    def sub_params
        params.require(:sub).permit(:user_id, :server_id, :username)
    end
end
