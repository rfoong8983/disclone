json.user do
    json.id @user.id
    json.email @user.email
    json.username @user.username
end

json.home do
    json.id @home.id
    json.server_name @home.server_name
    json.owner_id @home.owner_id
end

json.channel do
    json.id @channel.id
    json.channel_name @channel.channel_name
    json.server_id @channel.server_id
end