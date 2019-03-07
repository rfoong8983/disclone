# json.extract! @user, :email, :username
# debugger -- @HOME AND @USER EXIST HERE
json.partial! 'api/users/user', server: @server, user: @user, channel: @channel