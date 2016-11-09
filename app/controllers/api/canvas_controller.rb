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
      delta = normalize(canvas_params)
      layer = params[:layer]
      # debugger
      state = JSON.parse(game.canvas_state)
      layer_state = state[layer]
      layer_state.each.with_index do |obj, idx|
        # debugger
        if obj["id"] == delta[:id]
          layer_state.delete(obj)
          delta = obj.merge(delta)
        end
      end
      if delta["asset_class"] == "delete"
        print "DELETING OBJECT"
      else
        layer_state.push(delta)
      end
      state[layer] = layer_state
      if game.update(canvas_state: JSON.dump(state))
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
