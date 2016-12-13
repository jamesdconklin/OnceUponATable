class CanvasView {
  constructor(ctx, opts ) {
    this.ctx = ctx;
    this.width = ctx.canvas.clientWidth;
    this.height = ctx.canvas.clientHeight;
  }

  draw(canvas) {
    let { map, token, layer, focus, ephemeral } = canvas;

    this.ctx.clearRect(0, 0, this.width, this.height);

    map.forEach(
      (obj => obj.draw(
        this.ctx,
        focus && obj.id === focus.id)
      )
    );
    token.forEach(
      (obj => obj.draw(
        this.ctx,
        focus && obj.id === focus.id)
      )
    );
    if (ephemeral) {
      ephemeral.draw(this.ctx, false);
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

export default CanvasView;
