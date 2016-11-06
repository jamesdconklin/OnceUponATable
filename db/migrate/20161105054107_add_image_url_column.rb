class AddImageUrlColumn < ActiveRecord::Migration
  def change
    default_user_image = "https://static.texascommunitymedia.com/static/img/avatars/default-avatar.png"
    default_game_image = "https://www.wpfreeware.com/wp-content/uploads/2014/09/placeholder-images.jpg"

    add_column(
      :users, :image_url, :string,
      null: false, default: default_user_image
    )
    add_column(
      :games, :image_url, :string,
      null: false, default: default_game_image
    )
  end

end
