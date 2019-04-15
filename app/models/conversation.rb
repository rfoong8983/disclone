# == Schema Information
#
# Table name: conversations
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conversation < ApplicationRecord
    has_many :messages,
    primary_key: :id,
    foreign_key: :conversation_id,
    class_name: :Message
end
