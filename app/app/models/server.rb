class Server < ApplicationRecord
    validates :owner_id, :server_name, presence: true;

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User
end
