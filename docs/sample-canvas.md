```js
{
  canvas: {
    map: [
        {
          id: 1
          class: "image_asset",
          pos: [0,0],
          size: [800, 600]
          image_url: "assets/background_image.png"
      },
      {
        id: 2,
        class: "square",
        pos: [240,320],
        size: [80,80],
        lineColor: "#000000",
        fillColor: "#444444"
      }
    ],
    token: [
      {
        id: 3,
        class: "image",
        pos: [320, 320],
        size: [80,80]
        image_url: "assets/me_am_barbarian.png"
      },

      {
        id: 4,
        class: "circle",
        pos: [400, 320],
        size: [80,80],
        lineColor: "#2233AA",
        fillColor: "#6688FF",
      }
    ]
  },
  assets: {
    selected: {
      id: 3,
      image_url: "assets/bad_guy.png",
      title: "Bad Guy"
    },

    loaded: [
      {
        id: 3,
        image_url: "assets/bad_guy.png",
        title: "Bad Guy"
      },
      ...
    ]
  }
}
```
