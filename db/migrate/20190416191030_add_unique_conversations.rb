class AddUniqueConversations < ActiveRecord::Migration[5.2]
  def change
    remove_index :conversations, :channel_id
    add_index :conversations, :channel_id, unique: true
  end
end
