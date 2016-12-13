import {
  SET_DRAW_FN,
  RECEIVE_EPHEMERAL,
  RECEIVE_FOCUS,
  RECEIVE_CANVAS,
  RECEIVE_OBJECT,
  RECEIVE_LAYER
} from 'CanvasActions';

import Square from 'Square';
import ImageAsset from 'ImageAsset';


import { merge } from 'lodash';

const _defaultState = {
  map: [],
  token: [],
  focus: null,
  ephemeral: null,
  layer: 'token',
  draw: () => {}
};

const OBJECT_STORE = {};

const createObject = function(el, draw) {
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
  obj.setCB(draw);
  OBJECT_STORE[obj.id] = obj;
  return obj;
};

const CanvasReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let { token, map, layer, focus, ephemeral, draw } = state;
  switch (action.type) {
    case SET_DRAW_FN:
      (token.concat(map)).forEach(
        (obj) => obj.setCB(action.fn)
      );
      return merge(newState, { draw: action.fn });

    case RECEIVE_FOCUS:
      // return merge({ focus: action.obj }, { token, map, layer, ephemeral });
      return merge(newState, { focus: action.obj });

    case RECEIVE_EPHEMERAL:
      // return merge({ ephemeral: action.obj }, { token, map, layer, focus });
      return merge(newState, { ephemeral: action.obj });

    case RECEIVE_CANVAS:
      let createWithDraw = (obj) => createObject(obj, newState.draw);
      return merge(
        newState,
        {
          map: action.canvas.map.map(createWithDraw),
          token: action.canvas.token.map(createWithDraw)
        }
      );

    case RECEIVE_LAYER:
      return merge(newState, { layer: action.layer });

    default:
      // console.log("CR Default");

      return state;
  }

};

export default CanvasReducer;
