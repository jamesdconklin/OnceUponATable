```js

{
  currentUser: {
    id: 1,
    username: "Barry Bybax"
  },
  forms: {
    signup {
      errors: []
    },
    login {
      errors: []
    },
    imageUpload {
      errors: []
    },
  }
  gameFilters: {
    gm: {
      name: "IHeartTPKs",
      id: 2
    },
    tags: [
      {
        id: 1,
        tag: "Post-Apocalyptic"
      }
    ]
    system : {
      id: 1
      system: "FalloutRPG"
    }
  },
  gameListings: [
    {
      id: 1,
      players: {
        active: [
          {
            id: 1,
            username: "Barry Bybax"
          },
          {
            id: 3,
            username: "Harold"
          }
        ],
        pending: [
          {
            id: 4,
            username: "Brenda"
          }
        ]
      },
      gm: {
        username: "IHeartTPKs",
        id: 2
      },
      title: "Try not to die",
      description: "You try to survive. I try to kill you."
      active, true,
      system: "FalloutRPG",
      tags: [
        "Post-Apocalyptic",
        "Hard-Mode"
      ],
      currPlayers: 2,
      maxPlayers: 4
    }
  ],
  currentGame : {
    id: 1,
    title: "Try not to die",
    description: "You try to survive. I try to kill you."
    active: true,
    gm: {
      username: "IHeartTPKs",
      id: 2
    },
    tags: [
      "Post-Apocalyptic",
      "Hard-Mode"
    ],
    canvasState : [Binary],
    num_players: 4,
    players: {
      active: [
        {
          id: 1,
          username: "Barry Bybax"
        },
        {
          id: 3,
          username: "Harold"
        }
      ],
      pending: [
        {
          id: 4,
          username: "Brenda"
        }
      ]
    },
    chatHistory: [
      {
        author: "Barry Bybax",
        body: "/roll d20+10",
        result: "d20+10: 24"
        whisper: []
      },
      {
        author: "Gerald",
        body: "I stab Barry in the back",
        result: "",
        whisper: ["IHeartTPKs"]
      }
    ],
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
