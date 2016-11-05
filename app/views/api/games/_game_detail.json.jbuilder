json.partial! 'api/games/game_basics', game: game
json.set! :players do
  json.partial!('api/games/players', players: game.players)
end
