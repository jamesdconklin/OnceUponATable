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
  title: "Token: Dragon",
  asset_class: "image",
  image_url: "hammer_tail_dragon_by_digger2000-d4h1hch_zwiehu",
  width: 320,
  height: 240
)

Asset.create!(
  title: "Token: Male Spellsword",
  asset_class: "image",
  image_url: "jericho-model_hq7rwl",
  width: 100,
  height: 80
)

Asset.create!(
  title: "Token: Lich",
  asset_class: "image",
  image_url: "9ZC_Aganaster_Battlemage_cis_dvxf2g",
  width: 117,
  height: nil
)

Asset.create!(
  title: "Token: Female Fighter",
  asset_class: "image",
  image_url: "female_ranger_-_2_swords_-_action_2_thesim_lnd13j",
  width: 100,
  height: nil
)

Asset.create!(
  title: "Token: Male Swashbuckler",
  asset_class: "image",
  image_url: "9f26f2e7df1b468970373e66bb1ba3f5_yagsp2",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Male Monk",
  asset_class: "image",
  image_url: "4227a8ac87cd63a6b0e1350cc5e222d0_ngpkri",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Cyclops",
  asset_class: "image",
  image_url: "96086b1698b86365fac789a955a8719f_qlwvkr",
  width: 160,
  height: 160
)

Asset.create!(
  title: "Token: Minotaur",
  asset_class: "image",
  image_url: "fa9a8a56a28f157a13589899eb088468_fapeij",
  width: 160,
  height: 160
)

Asset.create!(
  title: "Token: Female Mage",
  asset_class: "image",
  image_url: "50d2d961e205b7605f40a5a005dc482d_lwcf8w",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Dwarven Mage",
  asset_class: "image",
  image_url: "dwarf_male_spellcaster_a_01_gysvpp",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Skeletal Champion",
  asset_class: "image",
  image_url: "monsters_skeleton_a_01_yotl5r",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Dwarven Warrior",
  asset_class: "image",
  image_url: "CZ8_dwarf_2_wef_minjr2",
  width: nil,
  height: nil
)

Asset.create!(
  title: "Token: Female Spellsword",
  asset_class: "image",
  image_url: "9AZ_femmage_cast2_sword_thesim_uzr8oz",
  width: 115,
  height: 80
)

Asset.create!(
  title: "Token: Male Fighter",
  asset_class: "image",
  image_url: "zocCBaq_nn112f"
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
  title: "Map: Study",
  asset_class: "image",
  image_url: "the_haunting____the_morgue__by_cisticola-d8cy73m_o1atdb",
  width: 1024,
  height: 598
)

Asset.create!(
  title: "Map: Ruined Fort",
  asset_class: "image",
  image_url: "crumbling_fort_tilefmm23_by_madcowchef-d7gihml_tr9bft",
  width: 1024,
  height: 1024
)

Asset.create!(
  title: "Map: River Crossing",
  asset_class: "image",
  image_url: "river_crossing_battlemap_by_evile_eagle-d4ea4q4_a3qzam",
  width: 1202,
  height: 1308
)

Asset.create!(
  title: "Map: Dark Alley",
  asset_class: "image",
  image_url: "the_haunting___boston_side_street_by_cisticola-d8a77nv_ge91ru",
  width: 1378,
  height: 579
)

# Scaled 50%
Asset.create!(
  title: "Map: Ruined Farmstead",
  asset_class: "image",
  image_url: "land_farmstead_with_graves__day__by_hero339-d8tsqzd_thrtjh",
  width: 1250,
  height: 512
)

# Scaled 50%
Asset.create!(
  title: "Map: Forest Road",
  asset_class: "image",
  image_url: "attachment_zf3jia_co9fs8",
  width: 1000,
  height: 625
)

Asset.create!(
  title: "Map: Boat",
  asset_class: "image",
  image_url: "EclipseTop_dnlnp9",
  width: 660,
  height: 1200
)

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
  title: "Chess: Board",
  asset_class: "image",
  image_url: "chessboard_zb9xzl",
  width: 682,
  height: 682
)

Asset.create!(
  title: "Chess: Black Queen",
  asset_class: "image",
  image_url: "ChessBlackQueen_wc6icq",
  width: 80,
  height: 75
)

Asset.create!(
  title: "Chess: Black Bishop",
  asset_class: "image",
  image_url: "ChessBlackBishop_m1lndm",
  width: 80,
  height: 72
)

Asset.create!(
  title: "Chess: Black King",
  asset_class: "image",
  image_url: "ChessBlackKing_gqvn96"
)

Asset.create!(
  title: "Chess: Black Knight",
  asset_class: "image",
  image_url: "ChessBlackKnight_gb59wq",
  width: 80,
  height: 78
)

Asset.create!(
  title: "Chess: Black Pawn",
  asset_class: "image",
  image_url: "ChessBlackPawn_rbszny",
  width: 51,
  height: 80
)

Asset.create!(
  title: "Chess: Black Rook",
  asset_class: "image",
  image_url: "ChessBlackRook_bqkndz",
  width: 61,
  height: 80
)

Asset.create!(
  title: "Chess: White Queen",
  asset_class: "image",
  image_url: "ChessWhiteQueen_raaqme",
  width: 80,
  height: 71
)

Asset.create!(
  title: "Chess: White Bishop",
  asset_class: "image",
  image_url: "ChessWhiteBishop_q6vccl",
  width: 74,
  height: 80
)

Asset.create!(
  title: "Chess: White King",
  asset_class: "image",
  image_url: "ChessWhiteKing_ralsqh",
  width: 80,
  height: 78
)

Asset.create!(
  title: "Chess: White Knight",
  asset_class: "image",
  image_url: "ChessWhiteKnight_warhxa"
)

Asset.create!(
  title: "Chess: White Pawn",
  asset_class: "image",
  image_url: "ChessWhitePawn_wczmr5",
  width: 50,
  height: 80
)

Asset.create!(
  title: "Chess: White Rook",
  asset_class: "image",
  image_url: "ChessWhiteRook_ggrbir",
  width: 57,
  height: 80
)
