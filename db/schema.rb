# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161105054107) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "game_signups", force: :cascade do |t|
    t.integer  "user_id",                        null: false
    t.integer  "game_id",                        null: false
    t.string   "status",     default: "PENDING", null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "game_signups", ["game_id"], name: "index_game_signups_on_game_id", using: :btree
  add_index "game_signups", ["user_id"], name: "index_game_signups_on_user_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.string   "title",                                        null: false
    t.string   "system",                                       null: false
    t.integer  "user_id",                                      null: false
    t.text     "description",                                  null: false
    t.text     "canvas_state",                                 null: false
    t.boolean  "active",          default: true
    t.integer  "max_players"
    t.integer  "current_player",                               null: false
    t.integer  "delta_ord",       default: 0,                  null: false
    t.string   "canvas_checksum"
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "image_url",       default: "default_game.jpg", null: false
  end

  add_index "games", ["current_player"], name: "index_games_on_current_player", using: :btree
  add_index "games", ["system"], name: "index_games_on_system", using: :btree
  add_index "games", ["title"], name: "index_games_on_title", using: :btree
  add_index "games", ["user_id"], name: "index_games_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                       null: false
    t.string   "password_digest",                                null: false
    t.string   "session_token",                                  null: false
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
    t.string   "image_url",       default: "default_avatar.jpg", null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
