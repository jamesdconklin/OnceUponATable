import Square from './square';
import ImageAsset from './image_asset';
// import Circle from './circle';
import CanvasObject from './canvas_object';
import { merge } from 'lodash';

class CanvasState {
  constructor(ctx, opts) {
    this.canvas = {map: [], token: []};
    this.width = ctx.canvas.clientWidth;
    this.height = ctx.canvas.clientHeight;
    this.props = opts;
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
        opts.update(opts.layer, this.focusObject);
      }
      this.layer = opts.layer;
    } else

    this.props = opts;
    this._populateShapes(opts.state);
    this.ephemeral = null;
    this.movedObject = null;
    if (this.focusObject && this._flatten(
          opts.state,
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

  _populateShapes(state) {
    this.canvas.token = state.token.map(this._createObject);
    this.canvas.map = state.map.map(this._createObject);
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
    this.props.update(this.layer, this.focusObject);
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
        case "Escape":
          this.props.asset = null;
          this.ephemeral = null;
          this.focusObject = null;
          this.draw();
          break;
        default:
          console.log(e);
      }
    }
  }

  handleMouseUp(e) {
    let pos = this.getCursorPosition(e.target, e);
    let [x,y] = pos;
    if (this.ephemeral && Math.min(
      Math.abs(this.ephemeral.width), Math.abs(this.ephemeral.height)
    ) > 5) {
      this.canvas[this.layer].push(this.ephemeral);
      this.props.update(this.layer, this.ephemeral);
      this.ephemeral = null;
    } else if (this.movedObject) {

      let tempMove = this.movedObject;
      this.movedObject = null;

      if (this.moved) {
        this.moved = false;
        this.props.update(this.layer, tempMove);
      }
    } else if (this.props.asset) {
      let assetDefinition = merge({
        pos: [x - this.props.asset.width/2, y - this.props.asset.height/2]
      }, this.props.asset);

      let [sanityX, sanityY] = assetDefinition.pos;
      if (sanityX < 1920 && sanityY < 1080) {

        let assetObject = this._createObject(assetDefinition);
        this.canvas[this.layer].push(assetObject);
        this.focusObject = assetObject;
        this.props.update(this.layer, assetObject);
      }
    }
    this.movedObject = null;
    this.ephemeral = null;
    this.draw();
  }

  getCursorPosition(canvas, event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      return [x,y];
  }

  handleMouseDown(e) {
    console.log("CANVCLICKDOWN");
    if (this.ephemeral || this.movedObject) {
      return;
    }

    let pos = this.getCursorPosition(e.target, e);
    let objects = this.canvas[this.layer];
    if (!this.props.assetParams.draw) {
      for (var i = objects.length-1; i >= 0; i--) {
        if ((this.clickDiff = objects[i].isClicked(pos))) {
          this.focusObject = objects[i];
          this.movedObject = objects[i];
          return;
        }
      }
      this.focusObject = null;
    }

    this.movedObject = null;
    if (this.props.assetParams.draw) {
      this.ephemeral = this.ephemeral || new Square({
        pos, height: 1,
        width: 1,
        lineColor: this.props.assetParams.lineColor,
        fillColor: this.props.assetParams.fill && this.props.assetParams.fillColor,
        lineWidth: this.props.assetParams.lineWidth
      });
      this.focusObject = this.ephemeral;
    }

    this.draw();
  }

  handleMouseMove(e) {
    let [x, y] = this.getCursorPosition(e.target, e);
    if (this.ephemeral) {
      let [eX, eY] = this.ephemeral.pos;
      this.ephemeral.width = x-eX;
      this.ephemeral.height = y-eY;
    } else if (this.movedObject) {
      if (!this.moved) {

        this.canvas[this.layer].splice(this.canvas[this.layer].indexOf(this.movedObject),1);
        this.canvas[this.layer].push(this.movedObject);
      }
      this.moved = true;
      let newX = x - this.clickDiff[0];
      let newY = y - this.clickDiff[1];
      this.movedObject.pos = [newX, newY];
    }
    (this.ephemeral || this.moved) && this.draw();
  }

  draw() {
    let lightParchment = "#f8ebe4";
    let { fillStyle, strokeStyle } = this.props.ctx;
    this.props.ctx.fillStyle = lightParchment;
    this.props.ctx.strokeStyle = lightParchment;
    this.props.ctx.beginPath();
    this.props.ctx.rect(0, 0, this.width, this.height);
    this.props.ctx.fill();
    this.props.ctx.fillStyle = fillStyle;
    this.props.ctx.strokeStyle = strokeStyle;
    this.canvas.map.forEach(
      (token => token.draw(
        this.props.ctx,
        this.focusObject && token.id == this.focusObject.id)
      )
    );
    this.canvas.token.forEach(
      (token => token.draw(
        this.props.ctx,
        this.focusObject && token.id == this.focusObject.id)
      )
    );
    if (this.ephemeral) {
      this.ephemeral.draw(this.props.ctx, false);
    }

    this.drawGrid();
  }

  drawGrid() {
    let { lineWidth, globalAlpha, strokeStyle } = this.props.ctx;
    this.props.ctx.globalAlpha = 0.2;
    this.props.ctx.lineWidth = 3;
    this.props.ctx.strokeStyle = "#634515";
    for (var i = 1; i <= this.width; i += 80) {
      this.props.ctx.beginPath();
      this.props.ctx.moveTo(i, 0);
      this.props.ctx.lineTo(i, this.height);
      this.props.ctx.stroke();
    }
    for (i = 1; i <= this.height; i += 80) {
      this.props.ctx.beginPath();
      this.props.ctx.moveTo(0,i);
      this.props.ctx.lineTo(this.width, i);
      this.props.ctx.stroke();
    }
    this.props.ctx.globalAlpha = globalAlpha;
    this.props.ctx.lineWidth = lineWidth;
    this.props.ctx.strokeStyle = strokeStyle;
  }
}

export default CanvasState;
