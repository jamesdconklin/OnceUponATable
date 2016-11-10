class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.text :body, null: false
      t.string :result
      t.timestamps null: false
    end

    add_index :messages, :user_id
    add_index :messages, :game_id
  end
end
