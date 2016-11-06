json.partial! 'api/games/game_basics', game: game
json.image_url game.image_url
json.set! :players do
  json.partial!('api/games/players', players: game.players)
end
