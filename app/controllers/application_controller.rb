class ApplicationController < ActionController::Base
    # helper methods give `VIEWS` access to meths from `CONTROLLER`
    helper_method :current_user, :logged_in?, :current_user_server, :current_user_channel

    def logged_in?
        !!current_user
    end

    def current_user_server
        server = current_user.servers
                            .where(owner_id: current_user.id)
                            .where("server_name like '%?_@me%'", current_user.id)
                            .order(id: :asc)
                            .limit(1)
        server = server[0]
    end

    def current_user_channel
        
        channel = current_user_server.channels
                                    .where(server_id: current_user_server.id)
                                    .where("lower(channel_name) = 'general'")
                                    .order(id: :asc)
                                    .limit(1)
        
        
        channel = channel[0]
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
        # byebug
        # @current_user = ActiveRecord Obj
    end

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    # def require_login
    #     # render json: { errors: { login: ['you must log-in'] } }, status: 418
    #     # using frontend to redirect now
    # end
end
