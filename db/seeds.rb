# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

default_user_image = "default-avatar_zei3at"
default_game_image = "placeholder-images_yyg23w"

# 1
User.create!(username: "Jamesui", password: 'password', image_url: "Conklin_vemfty")
# 2
User.create!(username: "Demo", password: 'password', image_url: "PZO9443-Inevitable_500_jubolw")
# 3
User.create!(username: "Marasella", password: 'password', image_url: "PZO1129-Jirelle_500_rgfura")
# 4
User.create!(username: "Soren", password: 'password', image_url: "PZO9265-Osirionologist_r7gbz6")
# 5
User.create!(username: "Tivego", password: 'password', image_url: "PZO1117-Oracle_90_lswj8o")
# 6
User.create!(username: "Brand", password: 'password', image_url: "A16_Verik-Vankaskerkin_pklyvo")
# 7
User.create!(username: "Delia", password: 'password', image_url: "PZO9077-Iomedae_500_ijtebt")
# 8
User.create!(username: "Baraka", password: 'password', image_url: "11JarloftheNorthWind_f36lia")
# 9
User.create!(username: "Campa One-Eye", password: 'password', image_url: "PZO9072-RiderImrijka_500_tivs5c")
# 10
User.create!(username: "Samoen Vanari", password: 'password', image_url: "carlisle_drg_359_New_Myth5_xmk8j0")
# 11
User.create!(username: "Ardella Graves", password: 'password', image_url: "PZO1129-Enora_ntvoqf")
# 12
User.create!(username: "Elim Graves", password: 'password', image_url: "PZO1126-Lem_500_ivt3tw")
# 13
User.create!(username: "Thirteen", password: "password", image_url: "PZO9080-Fez_90_zol940")
# 14
User.create!(username: "Seanza Vanari", password: 'password', image_url: "PZO1124-Lawyer_90_rtsvu3")
# 15
User.create!(username: "Saome Mas'harad", password: 'password', image_url: "PZO1125-Kyra_90_e0a6cv")
# 16
User.create!(username: "Goto Asai", password: 'password', image_url: "PZO9519-Olvan_kjx0e0")
# 17
User.create!(username: "Tessandalara", password: 'password', image_url: "A16_hs_merisiel_final_h32mha")
# 18
User.create!(username: "Karovna Sorex", password: 'password', image_url: "PZO9069-Mother_90_ksudqe")
# 19
User.create!(username: "Narrrr", password: 'password', image_url: "PZO9059-Gorebeard_90_dpf7mh")
# 20
User.create!(username: "Mr. Picksy", password: 'password', image_url: "PZO9060-Pirate_90_nlyxh0")




Asset.create!(
  title: "Map: Desert Cliff",
  asset_class: "image",
  image_url: 'AridCliff80Grid_ahpupc',
  width: 1920,
  height: 961
)
Asset.create!(
  title: "Map: Dining Hall",
  asset_class: "image",
  image_url: 'Main_HallNoRoof80Grid_vcoaq3',
  width: 960,
  height: 960
)

Asset.create!(
  title: "Board: Chess Board",
  asset_class: "image",
  image_url: 'chessboard_zb9xzl',
  width: 682,
  height: 682
)

Asset.create!(
  title: "Token: Male Fighter",
  asset_class: "image",
  image_url: "zocCBaq_nn112f",
)

Asset.create!(
  title: "Token: Male Mage",
  asset_class: "image",
  image_url: "Zangold-1_yuvyuu"
)

Asset.create!(
  title: "Token: Male Bard",
  asset_class: "image",
  image_url: "Zangold-2_wrby9r"
)

Asset.create!(
  title: "Token: Male Cleric",
  asset_class: "image",
  image_url: "Kellen-2_fj3h5f"
)

Asset.create!(
  title: "Token: Female Archer",
  asset_class: "image",
  image_url: "Iris-1_fzosuv"
)

Asset.create!(
  title: "Token: Female Swashbuckler",
  asset_class: "image",
  image_url: "Hazel-1_a6azwz"
)

Asset.create!(
  title: "Token: Male Knight",
  asset_class: "image",
  image_url: "Gwendal-1_rdwd8w"
)

Asset.create!(
  title: "Token: Hellborn Mage",
  asset_class: "image",
  image_url: "Enmerkar-1_wlpjal"
)

Asset.create!(
  title: "Token: Dark Elf Archer",
  asset_class: "image",
  image_url: "Arvan-1_jsu3mv"
)

Asset.create!(
  title: "Chess: Black Queen",
  asset_class: "image",
  image_url: "ChessBlackQueen_wc6icq",
  width: 96,
  height: 90
)

Asset.create!(
  title: "Chess: Black Bishop",
  asset_class: "image",
  image_url: "ChessBlackBishop_m1lndm",
  width: 102,
  height: 95
)

Asset.create!(
  title: "Chess: Black King",
  asset_class: "image",
  image_url: "ChessBlackKing_gqvn96",
  width: 88,
  height: 87
)

Asset.create!(
  title: "Chess: Black Knight",
  asset_class: "image",
  image_url: "ChessBlackKnight_gb59wq",
  width: 92,
  height: 89
)

Asset.create!(
  title: "Chess: Black Pawn",
  asset_class: "image",
  image_url: "ChessBlackPawn_rbszny",
  width: 55,
  height: 86
)

Asset.create!(
  title: "Chess: Black Rook",
  asset_class: "image",
  image_url: "ChessBlackRook_bqkndz",
  width: 70,
  height: 92
)







Asset.create!(
  title: "Chess: White Queen",
  asset_class: "image",
  image_url: "ChessWhiteQueen_raaqme",
  width: 101,
  height: 89
)

Asset.create!(
  title: "Chess: White Bishop",
  asset_class: "image",
  image_url: "ChessWhiteBishop_q6vccl",
  width: 96,
  height: 104
)

Asset.create!(
  title: "Chess: White King",
  asset_class: "image",
  image_url: "ChessWhiteKing_ralsqh",
  width: 93,
  height: 90
)

Asset.create!(
  title: "Chess: White Knight",
  asset_class: "image",
  image_url: "ChessWhiteKnight_warhxa",
  width: 99,
  height: 99
)

Asset.create!(
  title: "Chess: White Pawn",
  asset_class: "image",
  image_url: "ChessWhitePawn_wczmr5",
  width: 60,
  height: 99
)

Asset.create!(
  title: "Chess: White Rook",
  asset_class: "image",
  image_url: "ChessWhiteRook_ggrbir",
  width: 68,
  height: 93
)
