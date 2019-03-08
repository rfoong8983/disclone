
json.user do
    json.id user.id
    json.email user.email
    json.username user.username
end

# SHOULD MIMIC MY FRONT END STATE (SEE BELOW)
# CAN DESTRUCTURE IN MY REGULAR ACTION
# const receiveCurrentUser = ({user, server, channel})
# IN MY REDUCERS, HAVE THE REDUCER ONLY ACCEPT ONE
# OF THE ACTION.OBJS (e.g., action.channel)
#
# json.user do
#     json.set! user.id do 
#         json.id user.id
#         json.email user.email
#         json.username user.username
#     end
# end
# debugger

json.server do
    json.id server.id
    json.server_name server.server_name
    json.owner_id server.owner_id
end
# debugger

json.channel do
    json.id channel.id
    json.channel_name channel.channel_name
    json.server_id channel.server_id
end

# json.channel do
#     if @channel.nil?
#         json.id nil
#         json.channel_name nil
#         json.server_id nil
#     else
#         json.id channel.id
#         json.channel_name channel.channel_name
#         json.server_id channel.server_id
#     end
# end

# ==> {user: {}, home: {}} comes back in action
# json.extract! user, :id, :email, :username
# json.extract! home, :id, :server_name, :owner_id