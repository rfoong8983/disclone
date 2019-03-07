json.user do
    json.id @user.id
    json.email @user.email
    json.username @user.username
end

json.server do
    json.id @server.id
    json.server_name @server.server_name
    json.owner_id @server.owner_id
end

json.channel do
    json.id @channel.id
    json.channel_name @channel.channel_name
    json.server_id @channel.server_id
end