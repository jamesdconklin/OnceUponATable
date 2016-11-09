class Asset < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates(
    :asset_class,
    inclusion: {
      in: %w(square image circle),
      message: "%{value} must be square, image, or circle."
    }
  )
  validates :width, :height, numericality: { minimum: 80 }
  validates :lineWidth, numericality: { minimum: 1, maximum: 10 }
  validate :valid_colors

  after_initialize :set_defaults

  def set_defaults
    self.asset_class ||= "square"
    self.width ||= 80
    self.height ||= 80
    self.lineWidth ||= 3
    self.lineColor ||= '#000000'
  end

  def valid_colors
    pattern = /^#[0-9a-fA-F]{6}$/
    message = "must be formatted as \"#RRGGBB\""
    errors.add(:lineColor, message) unless self.lineColor.match(pattern)
    errors.add(:fillColor, message) unless self.fillColor.nil? ||
                                           self.fillColor.match(pattern)
  end

end
