# == Schema Information
#
# Table name: servers
#
#  id          :bigint(8)        not null, primary key
#  owner_id    :integer          not null
#  server_name :string(40)       not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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
        class_name: :Channel,
        dependent: :delete_all #destroy instantiates all children, and runs their dependent callbacks
end
