import Square from './square';
// import Circle from './circle';
import CanvasObject from './canvas_object';
import { merge } from 'lodash';

class CanvasState {
  constructor(ctx) {
    this.reduxState = {map: [], token: []};
    this.token = [];
    this.map = [];
    this._populateShapes();
    this.width = ctx.canvas.clientWidth;
    this.height = ctx.canvas.clientHeight;
    this.ctx = ctx;

    this.ephemeral = null;
    this.movedObject = null;
    this.focusObject = null;
    this.clickDiff = [0,0];
  }

  send(state) {
    console.log("SEND: ", state);
    this.reduxState = state;
  }

  _populateShapes() {
    this.token = this.reduxState.token.map(this._createObject);
    this.map = this.reduxState.map.map(this._createObject);
  }

  _createObject(el) {
    switch (el.class) {
      case "square":
        return new Square(el);
      case "circle":
      return new Square(el);
      default:
      return new Square(el);
    }
  }

  handleMouseUp(e) {
    let {layerX, layerY } = e;
    if (this.ephemeral && Math.min(
      this.ephemeral.width, this.ephemeral.height
    ) > 5) {
      console.log("PUSH");
      this.token.push(this.ephemeral);
      this.ephemeral = null;
    }
    this.movedObject = null;
  }

  handleMouseDown(e) {
    if (this.ephemeral || this.movedObject) {
      return;
    }

    let {layerX, layerY } = e;
    let pos = [layerX, layerY];

    let objects = this.token;
    for (var i = objects.length-1; i >= 0; i--) {
      if ((this.clickDiff = objects[i].isClicked(pos))) {
        this.focusObject = objects[i];
        this.movedObject = objects[i];
        return;
      }
    }

    this.focusObject = null;
    this.movedObject = null;

    this.ephemeral = this.ephemeral || new Square({pos: [layerX, layerY], height: 1, width: 1});
  }

  handleMouseMove(e) {
    let {layerX, layerY} = e;
    if (this.ephemeral) {
      let [eX, eY] = this.ephemeral.pos;
      this.ephemeral.width = layerX-eX;
      this.ephemeral.height = layerY-eY;
    } else if (this.movedObject) {
      let newX = layerX - this.clickDiff[0];
      let newY = layerY - this.clickDiff[1];
      this.movedObject.pos = [newX, newY];
    }
  }

  draw() {
    this._populateShapes();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.token.forEach(
      (token => token.draw(this.ctx))
    );
    if (this.ephemeral) {
      this.ephemeral.draw(this.ctx);
    }
    this.drawGrid();

  }

  drawGrid() {
    for (var i = 1; i <= this.width; i += 80) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, this.height);
      this.ctx.stroke();
    }
    for (i = 1; i <= this.height; i += 80) {
      this.ctx.beginPath();
      this.ctx.moveTo(0,i);
      this.ctx.lineTo(this.width, i);
      this.ctx.stroke();
    }
  }
}

export default CanvasState;

// const Asteroid = require('./asteroid.js');
// const Ship = require('./ship.js');
// const NUM_ASTEROIDS = 2;
// const DIM_X = 801;
// const DIM_Y = 641;
//
// function Game() {
//   this.asteroids = [];
//   this.ship = new Ship({
//     pos: [DIM_X / 2, DIM_Y / 2],
//     game: this
//   });
//   this.focusObject = null;
//   this.corner1 = null;
//   this.corner2 = null;
//   this.mouseDown = false;
//   this.addAsteroids();
// }
//
// Game.prototype.handleMouseUp = function(e) {
//   this.mouseDown = false;
//   this.focusObject = null;
// };
//
//

//
// Game.prototype.handleMouseDown = function(e) {
//   let x = e.layerX,
//   y = e.layerY;
//   if (this.mouseDown) {
//     return;
//   }
//
//   this.mouseDown = true;
//
//   let pos = [x,y];
//   let objects = this.allObjects();
//   for (var i = 0; i < objects.length; i++) {
//     if (objects[i].isClicked(pos)) {
//       this.focusObject = objects[i];
//       this.corner1 = null;
//       this.corner2 = null;
//       return;
//     }
//   }
//
//   this.focusObject = null;
//   this.corner1 = [e.layerX, e.layerY];
//   this.corner2 = this.corner1;
//
// };
//
// Game.prototype.allObjects = function() {
//   return this.asteroids.concat(this.ship);
// };
//
// Game.prototype.addAsteroids = function() {
//   for (var i = 0; i < NUM_ASTEROIDS; i++) {
//     let opts = {
//       pos: this.randomPosition(),
//       game: this
//     };
//     this.asteroids.push(new Asteroid(opts));
//   }
// };
//
// Game.prototype.placeShip = function() {
//   this.ship.relocate(this.randomPosition());
//   this.ship.vel = [0,0];
// };
//
// Game.prototype.randomPosition = function() {
//   let x = Math.random() * DIM_X;
//   let y = Math.random() * DIM_Y;
//
//   return [x, y];
// };
//
// Game.prototype.draw = function(ctx) {
//   ctx.clearRect(0, 0, DIM_X, DIM_Y);
//   this.allObjects().forEach(
//     (object) => {
//       object.draw(ctx);
//     }
//   );
//   if (this.corner1 && this.corner2) {
//     let deltaX = this.corner2[0] - this.corner1[0];
//     let deltaY = this.corner2[1] - this.corner1[1];
//     let saveStyle = ctx.strokeStyle;
//     let saveWidth = ctx.lineWidth;
//     ctx.beginPath();
//     ctx.strokeStyle = "#3333AA";
//     ctx.lineWidth = 5;
//     ctx.rect(...this.corner1, deltaX, deltaY);
//     ctx.stroke();
//     ctx.strokeStyle = saveStyle;
//     ctx.lineWidth = saveWidth;
//   }
//   this.drawGrid(ctx);
//
// };
//
// Game.prototype.moveObjects = function() {
//   this.allObjects().forEach(
//     (obj) => { obj.move(); }
//   );
// };
//

//
// Game.prototype.remove = function(asteroid) {
//   this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
// };
//
// Game.prototype.step = function() {
//   this.moveObjects();
//   this.checkCollisions();
// };
//
// Game.prototype.wrap = function(pos) {
//   let x = (pos[0] + DIM_X) % DIM_X;
//   let y = (pos[1] + DIM_Y) % DIM_Y;
//   return [x, y];
// };
//
// module.exports = Game;
