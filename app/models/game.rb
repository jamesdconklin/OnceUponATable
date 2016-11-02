class Game < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :system, :user_id, :description, :canvas_state,
            :current_player, presence: true

  after_initialize :gm_starts

  def gm_starts
    self.current_player = self.user_id
  end

  belongs_to(
    :gm,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :game_signups

  has_many(
    :players,
    through: :game_signups,
    source: :user
  )
end
