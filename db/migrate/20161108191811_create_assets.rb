class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.string :title, null: false
      t.string :asset_class, null: false, default: "square"
      t.integer :width, null: false, default: 80
      t.integer :height, null: false, default: 80
      t.string :lineColor, null: false, default: '#000000'
      t.string :fillColor, null: false, default: '#777777'
      t.integer :lineWidth, null: false, default: 3
      t.timestamps null: false
    end

    add_index :assets, :title
  end
end
