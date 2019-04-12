@servers.each do |server|
    json.set! server.id do
        json.id server.id
        json.owner_id server.owner_id
        json.server_name server.server_name
    end
end