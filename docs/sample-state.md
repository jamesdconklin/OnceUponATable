```js

{
  session: {
    currentUser: {
      id: 1,
      username: "Barry Bybax"
    },
    errors: []
  },
  gamesLists: {
    run: [
      {
        id: 1,
        title: "Room of Bores",
        system: "AD&D",
        description: "You. Will. Die.\n\n\n(of boredom)",
        gm: {
          id: 1,
          username: "Barry Bybax"
        }
        max_players: 4,
        num_players: 1
        current_player: 1
      }

    ],
    playing: [
      {
        id: 3,
        title: "Torn Tapestry",
        system: "PFRPG",
        description: "Pull aside the veil and breathe magic back into the world.",
        gm: {
          id: 4,
          username: "jamesui"
        },
        max_players: 4,
        num_players: 3
        current_player: 2
      }
    ]
  },
  gameListing: {
    id: 3,
    title: "Torn Tapestry",
    system: "PFRPG",
    description: "Pull aside the veil and breathe magic back into the world.",
    gm: {
      id: 4,
      username: "jamesui"
    },
    active: true,
    players: [
      { id: 1, username: "Barry Bybax"},
      { id: 2, username: "Flak"},
      { id: 3, username: "Armford Bradstrong"}
    ],
    max_players: 4,
    current_player: 2
  },
  gameState: {
    gm: {
      id: 4,
      username: 'jamesui'
    },
    players: [
      { id: 1, username: "Barry Bybax"},
      { id: 2, username: "Flak"},
      { id: 3, username: "Armford Bradstrong"}
    ],
    chat: [
      {
        author: "Barry Bybax",
        body: "/roll d20+10",
        result: "d20+10: 24"
      },
      {
        author: "Jamesui",
        body: "DC was 25. I'm afraid you've died, Barry.",
        result: "",
      }
    ],
    canvas : {
      objects: {
        1: {
          class: "square"
          layer: "map",
          pos_x: 100,
          pos_y: 150,
          rot: 3.14,
          other_props: other_values
        }
      },
      delta_ord: 39,
      checcksum: "foobarbazhamspameggs",
      current_player: 2
    },
    assets: [
      {
        id: 23,
        title: "Wastelander",
        image_url: [cloudinary url]
      }
    ]
  }
}

```
