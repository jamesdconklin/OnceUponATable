class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.string :system, null: false
      t.integer :user_id, null: false
      t.text :description, null: false
      t.text :canvas_state, null: false
      t.boolean :active, default: true
      t.integer :max_players
      t.integer :current_player, null: false
      t.integer :delta_ord, null: false, default: 0
      t.string :canvas_checksum
      t.timestamps null: false
    end
    add_index :games, :title
    add_index :games, :system
    add_index :games, :user_id
    add_index :games, :current_player
  end
end
