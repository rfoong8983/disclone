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