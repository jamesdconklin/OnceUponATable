# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Dungeon Master", password: 'password')
User.create!(username: "Fighter", password: 'password')
User.create!(username: "Wizard", password: 'password')
User.create!(username: "Cleric", password: 'password')
User.create!(username: "Rogue", password: 'password')

gloat = "Ladies and gentlemen, I have invited you all to my final \
resting place because I desire to be buried with my enemies. Enjoy \
what little time you have left, for tonight the earth will dine upon \
your bones. Oh, almost forgot - MUAHAHAHAHAHA! We must observe the \
niceties, after all."

Game.create!(
  user_id: 1,
  title: "Tomb of Horrors",
  system: "AD&D",
  description: gloat,
  max_players: 4
)

door_smash = "Sometimes I lie awake at night, thinking there's too \
much storytelling in this game of ours and not enough kicking in \
doors, wrecking the creatures behind them, and stealing their stuff. \
Let's fix that together!"

Game.create!(
  user_id: 2,
  title: "These Doors are Made for Kicking",
  system: "PFRPG",
  description: door_smash
)

GameSignup.create(game_id: 1, user_id: 2)
GameSignup.create(game_id: 1, user_id: 3)
GameSignup.create(game_id: 1, user_id: 4)
GameSignup.create!(game_id: 2, user_id: 5)
