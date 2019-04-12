class CorrectUserEmailIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, name: "index_users_on_username_and_email"
    add_index :users, [:email, :username]
  end
end
