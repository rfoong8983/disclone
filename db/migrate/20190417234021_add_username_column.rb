class AddUsernameColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :server_subs, :username, :string
    remove_index :server_subs, [:user_id, :server_id]
    add_index :server_subs, [:user_id, :server_id, :username], unique: true
  end
end
