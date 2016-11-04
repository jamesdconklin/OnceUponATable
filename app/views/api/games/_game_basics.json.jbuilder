json.(
  game,
  :id, :title, :system, :description,
  :max_players, :active, :current_player
)
json.gm {json.(game.gm, :id, :username)}
