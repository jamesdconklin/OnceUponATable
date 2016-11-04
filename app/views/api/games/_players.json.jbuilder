json.players Hash[
  players.map do |player|
    [player.id, {id: player.id, username: player.username}]
  end
]
