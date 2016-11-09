import CanvasObject from './canvas_object';


class Square extends CanvasObject {
  constructor(options) {
    super(options);
    this.asset_class = "square";
    this.width = options.width || 80;
    this.height = options.height || 80;
  }

  draw(ctx) {
    let saveStrokeStyle = ctx.strokeStyle;
    let saveLineWidth = ctx.lineWidth;
    let saveFillStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.strokeStyle = this.lineColor;
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.fillColor;
    ctx.rect(...this.pos, this.width, this.height);
    ctx.stroke();
    if (this.fillColor) {
      ctx.fill();
    }
    ctx.fillStyle = saveFillStyle;
    ctx.strokeStyle = saveStrokeStyle;
    ctx.lineWidth = saveLineWidth;
  }

  isClicked(pos) {
    // debugger;
    let [clickX, clickY] = pos;
    let [x,y] = this.pos;
    let dX = clickX - x;
    let dY = clickY - y;
    let match = false;
    let leeway = Math.ceil(this.lineWidth/2);

    if (this.fillColor) {
      match =  (dX <= this.width) && (dY <= this.height) && (dY >= 0) && (dX >= 0);
    } else  {
      // debugger;
      if (Math.min(Math.abs(dX), Math.abs(dX - this.width)) <= leeway) {
        match = (-leeway <= dY && dY <= this.height + leeway);
      } else if (Math.min(Math.abs(dY), Math.abs(dY - this.height)) <= leeway) {
        match = (-leeway <= dX && dX <= this.width + leeway);
      }

    }

    return match && [dX, dY];
  }

}

export default Square;
