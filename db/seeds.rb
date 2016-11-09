# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

default_user_image = "https://static.texascommunitymedia.com/static/img/avatars/default-avatar.png"
default_game_image = "https://www.wpfreeware.com/wp-content/uploads/2014/09/placeholder-images.jpg"


# 1
User.create!(username: "Dungeon Master", password: 'password', image_url: default_user_image)
# 2
User.create!(username: "Demo", password: 'password', image_url: default_user_image)
# 3
User.create!(username: "Fighter", password: 'password', image_url: default_user_image)
# 4
User.create!(username: "Wizard", password: 'password', image_url: default_user_image)
# 5
User.create!(username: "Cleric", password: 'password', image_url: default_user_image)
# 6
User.create!(username: "Bard", password: 'password', image_url: default_user_image)
# 7
User.create!(username: "Barbarian", password: 'password', image_url: default_user_image)
# 8
User.create!(username: "Druid", password: 'password', image_url: default_user_image)
# 9
User.create!(username: "Sorcerer", password: 'password', image_url: default_user_image)
# 10
User.create!(username: "Paladin", password: 'password', image_url: default_user_image)
# 11
User.create!(username: "Monk", password: 'password', image_url: default_user_image)
# 12
User.create!(username: "Ranger", password: 'password', image_url: default_user_image)
# 13
User.create!(username: "Rogue", password: 'password', image_url: default_user_image)

gloat = "Ladies and gentlemen, I have invited you all to my final \
resting place because I desire to be buried with my enemies. Enjoy \
what little time you have left, for tonight the earth will dine upon \
your bones. Oh, I almost forgot...\nMUAHAHAHAHAHA!\nWe must observe the \
niceties, after all."

Game.create!(
  user_id: 1,
  title: "Tomb of Horrors",
  system: "AD&D",
  description: gloat,
  max_players: 6,
  image_url: default_game_image
)

GameSignup.create(game_id: 1, user_id: 3)
GameSignup.create(game_id: 1, user_id: 4)
GameSignup.create(game_id: 1, user_id: 5)
GameSignup.create(game_id: 1, user_id: 13)

smash = "ME AM BARBARIAN. ME WANT SMASH MONSTERS. HELP SMASH \
MONSTERS. I PROMISE NOT GET ANGRY AND SMASH YOU."

Game.create!(
  user_id: 7,
  title: "WE AM SMASH MONSTERS",
  system: "HUH?!?!",
  description: smash,
  image_url: default_game_image
)

GameSignup.create(game_id: 2, user_id: 3)
GameSignup.create(game_id: 2, user_id: 9)
GameSignup.create!(game_id: 2, user_id: 5)

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
  image_url: default_game_image
)

GameSignup.create!(game_id: 3, user_id: 7)
GameSignup.create!(game_id: 3, user_id: 11)
GameSignup.create!(game_id: 3, user_id: 12)
GameSignup.create!(game_id: 3, user_id: 13)

Game.create!(
  user_id: 1,
  title: "Chat, Nothing More",
  system: "Chatbar",
  description: "Has anyone ever considered just chilling and chatting before?",
  image_url: default_game_image
)

GameSignup.create!(game_id: 4, user_id: 7)

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
  image_url: default_game_image
)

GameSignup.create!(game_id: 5, user_id: 8)
GameSignup.create!(game_id: 5, user_id: 9)
GameSignup.create!(game_id: 5, user_id: 11)
GameSignup.create!(game_id: 5, user_id: 13)

# red = '#FF0000'
# blue = '#0000FF'
# green = '#00FF00'

Asset.create!(
  title: "Arid Cliff",
  asset_class: "image",
  image_url: 'AridCliff80Grid_ahpupc',
  width: 1920,
  height: 961
)
Asset.create!(
  title: "Main Hall",
  asset_class: "image",
  image_url: 'Main_HallNoRoof80Grid_vcoaq3',
  width: 960,
  height: 960
)

Asset.create!(
  title: "Chess Board",
  asset_class: "image",
  image_url: 'chessboard_zb9xzl',
  width: 682,
  height: 682
)

Asset.create!(
  title: "Morningstar Fighter",
  asset_class: "image",
  image_url: "zocCBaq_nn112f",
)

Asset.create!(
  title: "White Mage",
  asset_class: "image",
  image_url: "Zangold-1_yuvyuu"
)

Asset.create!(
  title: "Jaunty Wizard",
  asset_class: "image",
  image_url: "Zangold-2_wrby9r"
)

Asset.create!(
  title: "Mace Fighter",
  asset_class: "image",
  image_url: "Kellen-2_fj3h5f"
)

Asset.create!(
  title: "Stalking Archer",
  asset_class: "image",
  image_url: "Iris-1_fzosuv"
)

Asset.create!(
  title: "Swaggering Bard",
  asset_class: "image",
  image_url: "Hazel-1_a6azwz"
)

Asset.create!(
  title: "Red Crusader",
  asset_class: "image",
  image_url: "Gwendal-1_rdwd8w"
)

Asset.create!(
  title: "Demonic Mage",
  asset_class: "image",
  image_url: "Enmerkar-1_wlpjal"
)

Asset.create!(
  title: "Dark Archer",
  asset_class: "image",
  image_url: "Enmerkar-1_wlpjal"
)
