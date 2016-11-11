class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all
    unless (title = params[:title]).empty?
      @assets = @assets.where(
        "lower(title) LIKE ?",
        "%#{title.downcase.split.join('%')}%"
      )
    end
  end
end
