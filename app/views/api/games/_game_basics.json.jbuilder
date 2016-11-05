json.(
  game,
  :id, :title, :system, :description,
  :max_players, :active, :current_player
)
json.gm do
  json.partial! 'api/users/user', user: game.gm
end
