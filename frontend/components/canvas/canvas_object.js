class CanvasObject {
  constructor(options) {
    this.pos = options.pos || [0,0];
    this.model = options.model;
    this.context = options.context;
    this.lineWidth = options.lineWidth || 3;
    this.fillColor = options.fillColor || "#777777";
    this.lineColor = options.lineColor || "#000000";
    this.clickOffset = [0,0];
  }

  posDiff(pos) {
    return [this.pos[0]-pos[0], this.pos[1]-pos[1]];
  }

  draw(ctx) {
    throw "DrawNotImplemented";
  }

  isClicked(pos) {
    throw "IsClickedNotImplemented";
  }
}

export default CanvasObject;

// MovingObject.prototype.draw = function(ctx) {
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
//   ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI, false);
//   ctx.fill();
//   let width = ctx.canvas.clientWidth;
//   let height = ctx.canvas.clientHeight;
//   let wrapX;
//   let wrapY;
//
//   if (this.pos[0] <= this.radius) {
//     wrapX = this.pos[0] + width;
//   }
//   if (width - this.pos[0] <= this.radius) {
//     wrapX = this.pos[0] - width;
//   }
//   if (this.pos[1] <= this.radius) {
//     wrapY = this.pos[1] + height;
//   }
//   if (height - this.pos[1] <= this.radius) {
//     wrapY = this.pos[1] - height;
//   }
//
//   if (wrapX || wrapY) {
//     wrapX = wrapX || this.pos[0];
//     wrapY = wrapY || this.pos[1];
//     ctx.beginPath();
//     ctx.arc(wrapX, wrapY, this.radius, 0, 2* Math.PI, false);
//     ctx.fill();
//   }
// };
//

// MovingObject.prototype.isClicked = function(pos) {
//   console.log(this.pos, pos);
//   let dxp = this.pos[0] - pos[0];
//   let dyp = this.pos[1] - pos[1];
//   return dxp*dxp + dyp*dyp < this.radius * this.radius;
// };
//
