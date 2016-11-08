import Square from './square';
// import Circle from './circle';
import CanvasObject from './canvas_object';
import { merge } from 'lodash';

class CanvasState {
  constructor(ctx, update) {
    this.reduxState = {map: [], token: []};
    this.token = [];
    this.map = [];
    this._populateShapes();
    this.width = ctx.canvas.clientWidth;
    this.height = ctx.canvas.clientHeight;
    this.ctx = ctx;
    this.update = update;
    this.moved = false;

    this.ephemeral = null;
    this.movedObject = null;
    this.focusObject = null;
    this.clickDiff = [0,0];
  }

  send(opts) {
    this.update = opts.update;
    this.reduxState = opts.state;
    this.ctx = opts.ctx;
    this._populateShapes();
    this.ephemeral = null;
    this.movedObject = null;
    if (this.focusObject && this._flatten(
          this.reduxState, ['token', 'map', 'id']
        ).indexOf(this.focusObject.id) < 0) {

      this.focusObject = null;
    }

    this.draw();
  }

  _flatten(obj, keys, param) {
    var ret = [];
    keys.forEach(
      key => obj[key].forEach(
        el => ret.push(el[param])
      )
    );
    return ret;
  }


  _populateShapes() {
    this.token = this.reduxState.token.map(this._createObject);
    this.map = this.reduxState.map.map(this._createObject);
  }

  _createObject(el) {
    switch (el.asset_class) {
      case "square":
        return new Square(el);
      case "circle":
      return new Square(el);
      default:
      return new Square(el);
    }
  }

  _deleteFocusObject(e) {
    e.stopPropagation();
    this.focusObject.asset_class="delete";
    this.token.splice(this.token.indexOf(this.focusObject),1);
    this.update('token', this.focusObject);
    this.focusObject = null;
    this.movedObject = null;
  }

  handleKeypress(e) {
    if (this.focusObject) {
      switch (e.key) {
        case "Delete":
          this._deleteFocusObject(e);
          break;
        case "Backspace":
          this._deleteFocusObject(e);
          break;
        default:
          console.log(e);
      }
    }
  }

  handleMouseUp(e) {
    let {layerX, layerY } = e;
    if (this.ephemeral && Math.min(
      Math.abs(this.ephemeral.width), Math.abs(this.ephemeral.height)
    ) > 5) {
      this.token.push(this.ephemeral);
      this.update('token', this.ephemeral);
      this.ephemeral = null;
    }
    if (this.movedObject) {
      if (this.moved) {
        this.update('token', this.movedObject);
      }
      this.movedObject = null;
      this.moved = false;
    }
    this.movedObject = null;
    this.ephemeral = null;
    this.draw();
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

    this.movedObject = null;

    this.ephemeral = this.ephemeral || new Square({pos: [layerX, layerY], height: 1, width: 1});
    this.focusObject = this.ephemeral;

    this.draw();
  }

  handleMouseMove(e) {
    let {layerX, layerY} = e;
    if (this.ephemeral) {
      let [eX, eY] = this.ephemeral.pos;
      this.ephemeral.width = layerX-eX;
      this.ephemeral.height = layerY-eY;
    } else if (this.movedObject) {
      this.moved = true;
      let newX = layerX - this.clickDiff[0];
      let newY = layerY - this.clickDiff[1];
      this.movedObject.pos = [newX, newY];
    }
    (this.ephemeral || this.moved) && this.draw();
  }

  draw() {
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
