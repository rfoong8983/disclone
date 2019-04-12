class Server < ApplicationRecord
    validates :owner_id, presence: true;
    validates :server_name, uniqueness: { message: " - Name has already been taken" }
    validates :server_name, presence: { message: " - This field is required" }

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :channels,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Channel
end
