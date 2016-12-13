import Square from 'Square';
import ImageAsset from 'ImageAsset';

const OBJECT_STORE = {};

export const createObject = function(el, draw) {
  let obj;
  if ((obj = OBJECT_STORE[el.id])) {
    obj.pos = el.pos;
  } else {
    switch (el.asset_class) {
      case "square":
         obj = new Square(el);
         break;
      case "image":
        obj = new ImageAsset(el);
        break;
      default:
        obj = new Square(el);
    }
  }
  obj.setCB && obj.setCB(draw);
  OBJECT_STORE[obj.id] = obj;
  return obj;
};

export const getCursorPosition = function(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return [x,y];
};
