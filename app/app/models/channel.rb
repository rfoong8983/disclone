class Channel < ApplicationRecord
    validates :server_id, presence: true
    validates :channel_name, presence: { message: "This field is required" }

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server
end