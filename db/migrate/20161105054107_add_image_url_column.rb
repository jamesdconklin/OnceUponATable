class AddImageUrlColumn < ActiveRecord::Migration
  def change
    add_column(
      :users, :image_url, :string,
      null: false, default: "default_avatar.jpg"
    )
    add_column(
      :games, :image_url, :string,
      null: false, default:  "default_game.jpg"
    )
  end

end
