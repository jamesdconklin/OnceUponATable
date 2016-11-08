class AddImageUrlToAssets < ActiveRecord::Migration
  def change
    add_column :assets, :image_url, :string
  end
end
