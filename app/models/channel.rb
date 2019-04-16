# == Schema Information
#
# Table name: channels
#
#  id           :bigint(8)        not null, primary key
#  server_id    :integer          not null
#  channel_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord
    validates :server_id, presence: true
    validates :channel_name, presence: { message: "This field is required" }
    
    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server

    has_one :conversation,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel
end
