import CanvasObject from './canvas_object';


class Square extends CanvasObject {
  constructor(options) {
    super(options);
    this.asset_class = "square";
    this.width = options.width || 80;
    this.height = options.height || 80;
  }

  drawFocus(ctx, focus) {
    if (!focus) {
      return;
    }
    let { strokeStyle, lineWidth, fillStyle, globalAlpha } = ctx;
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#66FF66";
    let [x,y] = this.pos;
    for (var i = 0; i < 5; i++) {
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.rect(x-i, y-i, this.width + 2*i, this.height + 2*i);
      ctx.stroke();
    }
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
  }

  draw(ctx, focus) {
    this.drawFocus(ctx, focus);
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
