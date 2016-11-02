class GameSignup < ActiveRecord::Base
  validates :user, :game, presence: true;
  validates(
    :user_id,
    uniqueness: { scope: :game_id,
                  message: "should only sign up once per game" }
  )

  belongs_to :user
  belongs_to :game
end
