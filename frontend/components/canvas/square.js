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
    ctx.fill();
    ctx.fillStyle = saveFillStyle;
    ctx.strokeStyle = saveStrokeStyle;
    ctx.lineWidth = saveLineWidth;
  }

  isClicked(pos) {
    let [clickX, clickY] = pos;
    let [x,y] = this.pos;
    let dX = clickX - x;
    let dY = clickY - y;

    return (dX <= this.width) && (dY <= this.height) &&
           (dY >= 0) && (dX >= 0) && [dX, dY];
  }

}

export default Square;
