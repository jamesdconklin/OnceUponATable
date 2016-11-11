# Once Upon a Table

[Live Site @ Heroku](https://onceuponatable.herokuapp.com)

Once Upon a Table is a full-stack web application inspired by Roll20. It provides a virtual tabletop on which players can construct and play a variety of tabletop games. It uses Ruby on Rails to serve API data and static pages,  PostgreSQL for data persistence, React/Redux to organize frontend elements, and a heavy canvas component as the tabletop interface.

## Features and Implementation
 - Tabletop
 - Assets
 - Chat

### Tabletop

The tabletop is the canvas on which the rest of the project builds, both figuratively and literally. It represents a gridded tabletop and allows users to draw shapes, drag placed elements around, and move appropriate assets from one layer to another to freeze a map in place and free up tokens to be moved by players.

 Working back-to-front, its state is drawn from the `canvas_state` field in the `games` table. As each game can only have one tabletop, I determined a separate table was not necessary. The state is stored as a stringified JSON object listing `CanvasObject` definitions by layer. The Rails backend exposes this map data to the canvas logic at the `/api/canvas/:game_id` route.

 When the canvas logic receives the map state, it iterates through each layer, mapping each definition to an appropriate `CanvasObject`. As the db contains identical fields to those needed to instantiate the `CanvasObject`, this is as simple as choosing a Constructor.

 ```js
  _createObject(el) {
    let obj;
    if ((obj = this.object_store[el.id])) {
      obj.pos = el.pos;
    } else {
      el.state = this;
      switch (el.asset_class) {
        case "square":
          obj = new Square(el);
          break;
        ...
```

Because executing canvas state changes object-by-object can introduce race conditions yielding inconsistent states depending on which push notification arrives first, and because the state string is comparatively lightweight, I decided to send the entire canvas state whenever a change is made. Because this state change would force a remapping of object definitions to the actual objects, I decided to memoize `CanvasObjects` by id, as seen above.
