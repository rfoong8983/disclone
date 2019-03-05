class ApplicationController < ActionController::Base
    # helper methods give `VIEWS` access to meths from `CONTROLLER`
    helper_method :current_user, :logged_in?, :current_user_home

    def logged_in?
        !!current_user
    end

    def current_user_home
        current_user.servers.find_by(owner_id: current_user.id)
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
