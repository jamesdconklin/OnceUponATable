# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Fighter", password: 'password')
User.create!(username: "Wizard", password: 'password')
User.create!(username: "Cleric", password: 'password')
User.create!(username: "Rogue", password: 'password')
