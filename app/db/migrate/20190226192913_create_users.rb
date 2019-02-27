class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :alias, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, [:username, :alias], unique: true
    add_index :users, :alias, unique: true
    add_index :users, :session_token, unique: true
  end
end
