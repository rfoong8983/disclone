# json.extract! @user, :email, :username
# debugger -- @HOME AND @USER EXIST HERE
json.partial! 'api/users/user', home: @home, user: @user, channel: @channel