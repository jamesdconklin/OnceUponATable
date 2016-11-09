class CanvasObject {
  constructor(options) {
    this.pos = options.pos || [0,0];
    this.context = options.context;
    this.lineWidth = options.lineWidth || 3;
    this.fillColor = options.fillColor; // || "#777777";
    this.lineColor = options.lineColor || "#000000";
    this.id = options.id || this._randomId();
  }

  _randomId() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-1234567890";
    let id = "";
    while (id.length < 16) {
      id += alphabet[Math.floor(Math.random()*64)];
    }
    return id;
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
