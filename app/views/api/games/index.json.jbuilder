json.array! @games do |game|
  json.partial! 'api/games/game_basics', game: game
  json.num_players game.players.count
end
