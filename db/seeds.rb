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

gloat = "Ladies and gentlemen, I have invited you all to my final \
resting place because I desire to be buried with my enemies. Enjoy \
what little time you have left, for tonight the earth will dine upon \
your bones. Oh, I almost forgot...\nMUAHAHAHAHAHA!\nWe must observe the \
niceties, after all."

Game.create!(
  user_id: 2,
  title: "Tomb of Horrors",
  system: "AD&D",
  description: gloat,
  max_players: 6,
  image_url: "latest_yszrzz"
)

GameSignup.create(game_id: 1, user_id: 3)
GameSignup.create(game_id: 1, user_id: 4)
GameSignup.create(game_id: 1, user_id: 5)
GameSignup.create(game_id: 1, user_id: 6)

smash = "ME AM BARBARIAN. ME WANT SMASH MONSTERS. HELP SMASH \
MONSTERS. I PROMISE NOT GET ANGRY AND SMASH YOU."

Game.create!(
  user_id: 19,
  title: "WE AM SMASH MONSTERS",
  system: "HUH?!?!",
  description: smash,
  image_url: "conan-the-barbarian_e10ypc"
)

GameSignup.create(game_id: 2, user_id: 3)
GameSignup.create(game_id: 2, user_id: 6)
GameSignup.create!(game_id: 2, user_id: 8)

salty = "I'm sick and tired of hearing about the quadratic superiority \
of casters. This is a game for those who, like me, have spent years \
learning every trick and technique, honorable or otherwise, to ensure \
grisly death by crushing, stabbing, or slicing.\n\nY'all are a team of \
gladiators. I'm the guy filling the arena. Show me the colors in which \
you paint."

Game.create!(
  user_id: 3,
  title: "Bloodsport",
  system: "3.5",
  description: salty,
  max_players: 4,
  image_url: "Coliseum-Rome-2-500x331_y4nmbx"
)

GameSignup.create!(game_id: 3, user_id: 19)
GameSignup.create!(game_id: 3, user_id: 18)
GameSignup.create!(game_id: 3, user_id: 2)
GameSignup.create!(game_id: 3, user_id: 8)

tapestry = <<-TORN
The casual observer might proclaim the land of Rimme to be blessed by \
peace and prosperity. Its two great nations, the Vesteni Union to the \
east and the Ostian Federation to the west, have recently completed a \
century of frantic expansion inwards from their capitals on opposite \
coasts.  When elven and human settlers gazed upon each other over the \
last stretch of wild land Rimme had to offer, they knew they had tamed \
the continent. Enterprise and exploration had brought the civilizations \
of Rimme wealth in the form of gold-laden coffers, sprawling, fertile \
lands; and technological advancement.

In that hectic century, Ostian entrepreneurs had developed new ways to \
raise crops and deliver them fresh to markets one hundred miles away. \
The elves had mobilized the most efficient manufacturing workforce the \
world had ever seen. The race of dwarves, once hidden by a self-imposed \
isolation within the Bazrun plateau, emerged as a juggernaut of \
technical and economic innovation, brokering power as a city state \
devoted to banking and the arms trade.

Delve beyond this casual observation, and you’ll see a bleaker truth. \
The settlers knew they’d conquered the continent, yes, but they also \
knew it had become crowded with new competition. The expansion inwards \
had been a race to acquire as many resources as possible for kin and \
country before the others, held up as vague bogeymen in vaguer horror \
stories told by grizzled and greying grandparents back home, could \
acquire them first. Those counterparts, staring back at them across a \
soon-to-be no-man’s land, were thus the faces of a new nemesis. The \
settlers watched the strange people across the divide and knew them as \
enemies, but knew not why.

The Ostian High Councils and the Vesteni Conclave of Elders had a \
clearer understanding of the conflict. To the humans, the elves \
represented the worst of oppressive and suffocating government. They \
embraced all the trappings of Big Brotherhood with a smile and mass-\
marketed the idea as “citizenship is family.” To the Vesteni, the \
humans represented a selfish, vain and disorderly species whose elites \
stand upon the shoulders of their poorer countrymen. Indeed, their \
advances over the last century had been secondarily targeted towards an \
eventual conflict: Ostian roads and advanced agriculture to move and \
feed their army and Vesteni factories to arm their own. The respective \
leaderships know these are preliminary measures at best, and their \
citizenry suspects it, too. Talk of strange men clad in strange clothes \
and speaking in stranger accents abounds in frontier taverns, and the \
officials who sent them there busy themselves with intelligence reports \
and threat assessments. Security, sabotage are the vogue of the day, \
and agents capable of advancing those interests are in high demand and \
are paid small fortunes by Ostian officials or trained, selected, and \
conscripted by the Vesteni.

Today two great nations silently prepare for war, and the sun rises a \
shade redder with each passing day.
TORN

Game.create!(
  user_id: 1,
  title: "Torn Tapestry",
  system: "E6 Gestalt PFRPG",
  max_players: 4,
  description: tapestry,
  image_url: "WorldMap_m6zhzn"
)

GameSignup.create!(game_id: 4, user_id: 2)
GameSignup.create!(game_id: 4, user_id: 7)
GameSignup.create!(game_id: 4, user_id: 8)
GameSignup.create!(game_id: 4, user_id: 20)

sks = <<-SKS
A Pathfinder Society Scenario designed for levels 1–11.

At long last, the Pathfinder Society has reassembled the Numerian device known as the Sky Key. Initial tests suggest it is capable of projecting a location’s past into the present, allowing Society agents to peruse books from destroyed libraries and speak with echoes of long-dead heroes. Now that it has perfected the Sky Key’s controls, the Pathfinder Society is prepared to extract a slice of Absalom’s history and bring it into the present; however, there’s no telling what might be waiting inside—or who in the present might wish to wield the same power.

Written by Crystal Frasier.
SKS

Game.create!(
  user_id: 1,
  title: "PFS 7-00 The Sky Key Solution",
  system: "PFS",
  description: sks,
  max_players: 64,
  image_url: "PZOPSS0700E_c4pjdo"
)

(2..20).each do |num|
  GameSignup.create!(game_id: 5, user_id: num)
end

school_of_spirits = <<-SOS
A Pathfinder Society Scenario designed for levels 1–5.

Seven years ago, Pathfinders entered Absalom’s shattered Precipice Quarter in pursuit of a ruby ring but also rescued a strange survivor. She has since grown to adulthood and exhibited a rebellious spirit connected to the ruined school where the Pathfinders found her. The woman’s family has contacted the Society, hoping that its agents can escort her back to the haunted site and unravel the Drownyard’s relentless mysteries.

Written by Alex Greenshields.
SOS

Game.create!(
  user_id: 1,
  title: "PFS 7-05 School of Spirits",
  system: "PFS",
  description: school_of_spirits,
  max_players: 6,
  image_url: "PZOPSS0705E_500_eikoza"
)

GameSignup.create!(game_id: 6, user_id: 11)
GameSignup.create!(game_id: 6, user_id: 12)
GameSignup.create!(game_id: 6, user_id: 15)
GameSignup.create!(game_id: 6, user_id: 2)
GameSignup.create!(game_id: 6, user_id: 16)

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
