class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all.order(:title)
    unless (title = params[:title]).empty?
      @assets = @assets.where(
        "lower(title) LIKE ?",
        "%#{title.downcase.split.join('%')}%"
      )
    end
  end
end
