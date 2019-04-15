class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :channel_id, null: false
      t.timestamps
    end

    add_index :conversations, :channel_id;
  end
end
