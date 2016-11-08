import CanvasState from './canvas_state';

class CanvasView {
  constructor(ctx, el) {
    this.ctx = ctx;
    this.el = el;
    this.canvas = new CanvasState(this.ctx);
  }

  send(state) {
    this.canvas.send(state);
  }


  bindMouseDownHandler() {
    this.el.addEventListener("mousedown",
      (e) => {
        this.canvas.handleMouseDown(e);
      }
    );
  }

  bindMouseUpHandler() {
    this.el.addEventListener("mouseup",
      (e) => {
        this.canvas.handleMouseUp(e);
      }
    );
  }

  bindMouseMoveHandler() {
    this.el.addEventListener("mousemove",
      (e) => {
        this.canvas.handleMouseMove(e);
      }
    );
  }

  start() {
      this.bindMouseDownHandler();
      this.bindMouseUpHandler();
      this.bindMouseMoveHandler();
    window.setInterval(
      () => {
        this.canvas.draw();
      },
      40
    );
    // this.canvas.draw();
  }
}

export default CanvasView;
