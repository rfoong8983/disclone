class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :owner_id, null: false
      t.string :server_name, limit: 40, null: false
      t.timestamps
    end

    add_index :servers, [:owner_id, :server_name], unique: true
  end
end
