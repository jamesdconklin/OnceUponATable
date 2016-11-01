# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "half_orc_barbarian", password: 'password')
User.create!(username: "human_paladin", password: 'password')
User.create!(username: "dwarf_cleric", password: 'password')
User.create!(username: "half_elf_druid", password: 'password')
User.create!(username: "elfwizard", password: 'password')
User.create!(username: "halfling_rogue", password: 'password')
User.create!(username: "gnome_sorcerer", password: 'password')
