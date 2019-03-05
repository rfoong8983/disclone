
json.set! :user do
    json.id user.id
    json.email user.email
    json.username user.username
end
# debugger
json.set! :home do
    json.id home.id
    json.server_name home.server_name
    json.owner_id home.owner_id
end

# ==> {user: {}, home: {}} comes back in action
# json.extract! user, :id, :email, :username
# json.extract! home, :id, :server_name, :owner_id