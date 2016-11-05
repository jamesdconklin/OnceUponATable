json.array! players do |player|
  json.partial! 'api/users/user', user: player
end
