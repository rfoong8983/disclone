class CorrectUniqueUsersConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, name: "index_users_on_email_and_username"
    add_index :users, [:username, :email]
  end
end
