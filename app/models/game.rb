class Game < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :system, :gm, :description, :canvas_state,
            :current_player, :delta_ord, presence: true
  validates :max_players,
            numericality: { only_integer: true,
                            minimum: 0, allow_nil: true }

  after_initialize :gm_starts
  after_initialize :setup_canvas
  before_save :html_attr

  def html_attr
    self.description = self.description.html_safe
  end

  def setup_canvas
    self.canvas_state = {}
  end

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
