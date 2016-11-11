class User < ActiveRecord::Base
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :session_token, presence: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    user = nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  def reset_session_token
    if self.username != "Demo"
      self.session_token = self.class.generate_session_token
      save!
    end
    self.session_token
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  has_many(
    :run_games,
    class_name: :Game,
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :game_signups

  has_many(
    :played_games,
    through: :game_signups,
    source: :game
  )


  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
