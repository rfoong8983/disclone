class CreateServerSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :server_subs do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    add_index :server_subs, [:user_id, :server_id], unique: true
  end
end
