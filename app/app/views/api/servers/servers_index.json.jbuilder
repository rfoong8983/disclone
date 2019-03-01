json.servers(@servers) do |server|
    json.id server.id
    json.owner_id server.owner_id
    json.server_name server.server_name
end