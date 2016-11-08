class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all
    render json: @assets
  end
end
