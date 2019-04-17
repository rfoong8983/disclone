@subs.each do |sub|
    json.set! sub.server_id do
        json.id sub.id
        json.user_id sub.user_id
        json.server_id sub.server_id
    end
end