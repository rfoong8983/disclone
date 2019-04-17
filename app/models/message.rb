# == Schema Information
#
# Table name: messages
#
#  id              :bigint(8)        not null, primary key
#  text            :string           not null
#  conversation_id :integer          not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Message < ApplicationRecord
  belongs_to :conversation,
  primary_key: :channel_id,
  foreign_key: :conversation_id,
  class_name: :Conversation

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
