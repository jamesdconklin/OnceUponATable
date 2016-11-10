import Square from './square';
import ImageAsset from './image_asset';
// import Circle from './circle';
import CanvasObject from './canvas_object';
import { merge } from 'lodash';

class CanvasState {
  constructor(ctx, update) {
    this.reduxState = {map: [], token: []};
    // this.token = [];
    // this.map = [];
    this.canvas = {map: [], token: []};
    this._populateShapes();
    this.width = ctx.canvas.clientWidth;
    this.height = ctx.canvas.clientHeight;
    this.ctx = ctx;
    this.update = update;
    this.moved = false;
    this.object_store = {};
    this.layer = 'token';

    this.ephemeral = null;
    this.movedObject = null;
    this.focusObject = null;
    this.clickDiff = [0,0];

    this._createObject = this._createObject.bind(this);
  }

  send(opts) {
    if (this.layer !== opts.layer) {
      if (this.focusObject) {
        this.canvas[this.layer].splice(
          this.canvas[this.layer].indexOf(this.focusObject), 1
        );
        this.canvas[opts.layer].push(this.focusObject);
        this.update(opts.layer, this.focusObject);
      }
      this.layer = opts.layer;
    } else

    this.asset = opts.asset;
    this.update = opts.update;
    this.reduxState = opts.state;
    this.ctx = opts.ctx;
    this._populateShapes();
    this.ephemeral = null;
    this.movedObject = null;
    if (this.focusObject && this._flatten(
          this.reduxState,
          ['token', 'map'],
          'id'
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
    this.canvas.token = this.reduxState.token.map(this._createObject);
    this.canvas.map = this.reduxState.map.map(this._createObject);
  }

  _createObject(el) {
    let obj;
    if ((obj = this.object_store[el.id])) {
      obj.pos = el.pos;
    }
    el.state = this;
    switch (el.asset_class) {
      case "square":
         obj = new Square(el);
         break;
      case "circle":
        obj = new Square(el);
        break;
      case "image":
        obj = new ImageAsset(el);
        break;
      default:
        obj = new Square(el);
    }
    this.object_store[obj.id] = obj;
    return obj;
  }

  _deleteFocusObject(e) {
    e.stopPropagation();
    this.focusObject.asset_class="delete";
    this.canvas[this.layer].splice(this.canvas[this.layer].indexOf(this.focusObject),1);
    this.update(this.layer, this.focusObject);
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
          // console.log(e);
      }
    }
  }

  handleMouseUp(e) {
    let {layerX, layerY } = e;
    if (this.ephemeral && Math.min(
      Math.abs(this.ephemeral.width), Math.abs(this.ephemeral.height)
    ) > 5) {
      this.canvas[this.layer].push(this.ephemeral);
      this.update(this.layer, this.ephemeral);
      this.ephemeral = null;
    } else if (this.movedObject) {
      let tempMove = this.movedObject;
      this.movedObject = null;
      if (this.moved) {
        this.moved = false;
        this.update(this.layer, tempMove);
      }
    } else if (this.asset) {

      let assetDefinition = merge({
        pos: [layerX - this.asset.width/2, layerY - this.asset.height/2]
      }, this.asset);

      let assetObject = this._createObject(assetDefinition);
      this.canvas[this.layer].push(assetObject);
      this.focusObject = assetObject;

      this.update(this.layer, assetObject);
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
    let objects = this.canvas[this.layer];
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
      if (!this.moved) {

        this.canvas[this.layer].splice(this.canvas[this.layer].indexOf(this.movedObject),1);
        this.canvas[this.layer].push(this.movedObject);
      }
      this.moved = true;
      let newX = layerX - this.clickDiff[0];
      let newY = layerY - this.clickDiff[1];
      this.movedObject.pos = [newX, newY];
    }
    (this.ephemeral || this.moved) && this.draw();
  }

  draw() {
    let lightParchment = "#f8ebe4";
    let { fillStyle, strokeStyle } = this.ctx;
    this.ctx.fillStyle = lightParchment;
    this.ctx.strokeStyle = lightParchment;
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fill();
    this.ctx.fillStyle = fillStyle;
    this.ctx.strokeStyle = strokeStyle;
    this.canvas.map.forEach(
      (token => token.draw(
        this.ctx,
        this.focusObject && token.id == this.focusObject.id)
      )
    );
    this.canvas.token.forEach(
      (token => token.draw(
        this.ctx,
        this.focusObject && token.id == this.focusObject.id)
      )
    );
    if (this.ephemeral) {
      this.ephemeral.draw(this.ctx, false);
    }

    this.drawGrid();
  }

  drawGrid() {
    let { lineWidth, globalAlpha, strokeStyle } = this.ctx;
    this.ctx.globalAlpha = 0.2;
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "#634515";
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
    this.ctx.globalAlpha = globalAlpha;
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = strokeStyle;
  }
}

export default CanvasState;
