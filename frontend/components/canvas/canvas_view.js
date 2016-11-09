import CanvasState from './canvas_state';

class CanvasView {
  constructor(ctx, el, update) {
    this.ctx = ctx;
    this.el = el;
    this.canvas = new CanvasState(this.ctx, update);
  }

  send(opts) {
    this.canvas.send(opts);
  }

  bindMouseDownHandler() {
    this.el.addEventListener("mousedown",
      (e) => {
        this.canvas.handleMouseDown(e);
      }
    );
  }

  bindKeyHandler() {
    this.el.addEventListener("keydown",
      (e) => {
        this.canvas.handleKeypress(e);
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
      this.bindKeyHandler();

    this.canvas.draw();
  }
}

export default CanvasView;
