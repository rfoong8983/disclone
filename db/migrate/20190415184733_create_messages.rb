class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :text, null: false
      t.integer :conversation_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :messages, :conversation_id;
    add_index :messages, :user_id;
  end
end
