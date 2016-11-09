class Api::CanvasController < ApplicationController
  # before_action: require_login
  def show
    game = Game.find_by(id: params[:game_id])
    if game
      render json: JSON.parse(game.canvas_state)
    else
      render json: ["Game not found by given id"],
             status: 422
    end
  end

  def update
    game = Game.find_by(id: params[:game_id])
    if game

      # Delete element from canvas state

      delta = normalize(canvas_params)
      layer = params[:layer]
      state = JSON.parse(game.canvas_state)

      state.each do |_, el_list|
        el_list.each do |el|
          if el["id"] == delta[:id]
            el_list.delete(el)
            delta = el.merge(delta)
            break
          end
        end
      end

      state[layer].push(delta) unless delta["asset_class"] == "delete"

      if game.update(canvas_state: JSON.dump(state))
        Pusher.trigger(
          "canvas_#{params[:game_id]}",
          "canvas_update",
          state
        )
        render json: state
      else
        render status: 422, json: game.errors.full_messages
      end
    else
      render json: ["Game not found by given id"],
             status: 422
    end
  end

  private

  def normalize(delta)
    width = delta[:width].to_i
    height = delta[:height].to_i
    x, y = delta[:pos].map(&:to_i)

    if width < 0
      x += width
      width = -width
    end

    if height < 0
      y += height
      height = -height
    end

    delta[:height] = height
    delta[:width] = width
    delta[:pos] = [x, y]

    delta

  end

  def canvas_params
    params.require(:delta).permit(
      :id, :asset_class, :width, :height, :lineColor,
      :lineWidth, :fillColor, :image_url, pos: []
    )
  end

end
