class CreateGameSignups < ActiveRecord::Migration
  def change
    create_table :game_signups do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.string :status, null: false, default: "PENDING"
      t.timestamps null: false
    end
    add_index :game_signups, :game_id
    add_index :game_signups, :user_id
  end
end
