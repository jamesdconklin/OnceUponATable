# Once Upon a Table

[Live Site @ Heroku](https://onceuponatable.herokuapp.com)

[Label](./screens/img)

Once Upon a Table is a full-stack web application inspired by Roll20. It provides a virtual tabletop on which players can construct and play a variety of tabletop games. It uses Ruby on Rails to serve API data and static pages,  PostgreSQL for data persistence, React/Redux to organize frontend elements, and a heavy canvas component as the tabletop interface.

## Features and Implementation
 - Tabletop
 - Assets
 - Chat

### Tabletop

The tabletop is the canvas on which the rest of the project builds, both figuratively and literally. It represents a gridded tabletop and allows users to draw shapes, drag placed elements around, and move appropriate assets from one layer to another to freeze a map in place and free up tokens to be moved by players.

#### Canvas Logic

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

State changes are mediated by `MouseDown`, `-Move`, and `-Up` handlers. and a few keypress handlers. `MouseDown` typically sets pointers to a fiven object to adjudicate moving, creation, selecting, and deletion. `MouseMove` changes the position of moved elements and the dimensions of objects currently being drawn. `MouseUp` writes a drawn element to the proper layer, releases a moved object, or places an asset imported from the Asset Library.

Once mounted, the canvas subscribes to pusher events to keep apprised of changes made by other players. Most changes are first committed locally first without POSTing to the server and then reconciled later if needed for a smoother experience.

#### Canvas display

[Screen](./screens/Grid.png)


The canvas state is stored in separate map and token layers so that all objects in the former render below any object in the token layer. This separation also prevents accidentally moving map elements when working on the token layer.

In terms of implementation, each CanvasObject is required to provide `_isClicked(e)` and `draw(ctx)` methods.

```js
class CanvasObject {
  constructor(options) {
    ...
  }
  ...
  draw(ctx) {
    throw "DrawNotImplemented";
  }

  isClicked(pos) {
    throw "IsClickedNotImplemented";
  }
  ...
```

The `CanvasState` draws itself by clearing the entire canvas, invoking the `draw` method of each `CanvasObject` in the map layer, then that of each member of the token layer, then finally drawing a grid overlay.

As we don't have animations without user input, I decided to manually call the `CanvasState`'s draw method at the end of any methods that mutate its state instead of setting an interval.

#### Canvas Toolbox

[Screen](./screens/toolbox.png)

Controlling interaction with the canvas, i.e. whether the user is selecting or drawing and how or to which layer he or she is drawing, is governed by a toolbox, implemented as a React component connected to the state's `assetLibrary.assetParams`.

```js
<div className="color-selector"
     style={{backgroundColor: this.state.fillColor}}>
  <label>
    <input type="color" id="fillColor"
           value={this.state.fillColor || "#f00"}
           onChange={this._onChange("fillColor")}/>
    </label>
</div>
```

```js
_setAttribute(attribute, val) {
  return (e) => {
    e.preventDefault();
    this.props.sendParams({[attribute]: val});
  };
}
```

Within the `Toolbox`, this._onChange is a curried function that returns a handler that dispatches an appropriate action representing the change in interaction parameters to the `store`.

As this is one of the areas where I feel I was clever with styling, I will cover how I achieved the clickable color selector field beneath the color headers.

```scss
.color-selector {
  overflow: hidden;
  border-radius: 0px 2px 10px 0;
  position: relative;
  height: 30px;
  label {
    width: 100%;
    height: 100%;
    input {
      visibility: hidden;
      width: 100%;
      height: 100%;
    }
  }
}
```

First, I wrap the `input` in a `label`, so that clicking the latter transfers the click to the former. Then I set the label to fill up its entire parent, which clips any overflow past the curved border with `overflow: hidden`. In-line, I style the wrapping `div` with the currently selected color. Hiding the actual `input` completes the desired effect.

### Asset library

[Screen](./screens/AssetDrag.png)

The asset library contains a list of `Asset` objects that can each be used to create a `CanvasObject`. Essentially, they can be merged with an object defining a position and passed to the appropriate constructor as shown in `_createObject` above.

In the list of assets, each asset is assigned a handler that dispatches a `RECEIVE_SELECTED_ASSET` action to the store when clicked or dragged. Releasing the mouse button sends another action with a null asset to clear the value. I borrowed the browser's provided drag animation.

For reasons I suspect have to do with element focus, `drop` events would not trigger on the canvas when the asset was released. I solved this issue by assigning a `dragend` handler to each dragged asset element. When released, the element's triggered callback would reinterpret the `dragend` event as a mouse event, package it up, and manually trigger it on the canvas, as demonstrated below.

```js
_triggerMouseUp(e) {
  let event = new MouseEvent("mouseup", e);
  document.getElementById("game-canvas").dispatchEvent(event);
}
```

Once placed on the canvas, assets become proper `CanvasObjects` and can be serialized and deserialized as such.

### Game Chat

[Screen](./screens/Chat.png)

Game chat uses the same Push mechanic as the map updates. I do not render changes locally before POSTing to the server because some commands, i.e. rolls, require feedback before they can be rendered.

### Navigation

When logged out, the splash page and signup/login forms provide a handy Demo Login button. Because I thought I'd just cut to the chase and show you the coolest part of the site, this link also redirects to a pre-populated tabletop. If you care to navigate the site normally, you can go back in your browser, where you should land at a listing of your games (empty for new users)

In the header, the [Username] tab drops down links on click to user home (for now, a user's game listings) and to signout. The games tab drops down links to the New Game form and to the logged-in user's games.

The Game view page, reachable by clicking the relevant titles of the Game listing cards, will display all the relevant information for that page - its title, system, description, splash image, a join button (for players or the GM), an edit button (for the GM) and a list of user icons linking to the profile pages of the game's players. GM's can click the plus icon in this list to bring up a menu for adding players, and other users can click the same icon to sign themselves up. GMs can remove a player by clicking the  under his or her icon, and players can remove themselves similarly.

[Game Show Screen](./screens/GameDetail.png)
[Signup Modal](./screens/UserSignup.png)


## Future Improvements

My initial designs were grander but severely restricted by the constraints of a project lasting less than two where I'd be learning the harder aspects as I went along. As such, I'll be trying to implement the following, in rough order, when I've the time and inspiration:

 - Separate Sessions table to allow single-user multiple login.
 - Game and User search indices
 - Dedicated user profile pages.
 - Game tagging and search by tag.
 - Support for uploading:
   - User images
   - Game detail images
   - Assets
 - Styling Overhaul
   - There's a good reason I redirect guests directly to the play page. I think I've a better head for data than for visuals, and I was very much learning as I went along. The resulting style feels, I think, somewhat disjointed, and should I get the time, I'd like to sit down, design one crisp theme, possibly using a pre-existing framework, and make it universal across the app.

 - Redo game signups as a request or invite cycle instead of direct addition.
 - Refactor canvas logic to be more directly integrated with the redux cycle.
 - Add chat features:
  - Whispers
  - Exit from canvas via exit command in chat.
 - Add tabletop features:
  - Circle ojects, maybe other shapes.
  - Object resizing and rotation
  - Asset decoration (status symbols, numeric labels)
