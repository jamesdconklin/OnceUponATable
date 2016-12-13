import { createObject } from 'CanvasElementUtil';

import {
  RECEIVE_OBJECT,
  SET_DRAW_FN,
  RECEIVE_EPHEMERAL,
  RECEIVE_FOCUS,
  RECEIVE_CANVAS,
  RECEIVE_LAYER
} from 'CanvasActions';

import { merge } from 'lodash';

const _defaultState = {
  map: [],
  token: [],
  focus: null,
  ephemeral: null,
  layer: 'token',
  draw: () => {}
};


const CanvasReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let { token, map } = state;
  switch (action.type) {
    case SET_DRAW_FN:
      (token.concat(map)).forEach(
        (obj) => obj.setCB && obj.setCB(action.fn)
      );
      return merge(newState, { draw: action.fn });

    case RECEIVE_OBJECT:
      let objects = newState[action.layer];

      for (var i = 0; i < objects.length; i++) {
        let el = objects[i];
        if (el.id === action.obj.id) {
          if (action.obj.asset_class === "delete") {
            objects.splice(i,1);
          } else {
            objects[i] = createObject(merge({}, el, action.obj), newState.draw);
          }
          return newState;
        }
      }
      objects.push(createObject(action.obj, newState.draw));
      return newState;

    case RECEIVE_FOCUS:
      return merge(newState, { focus: action.obj });

    case RECEIVE_EPHEMERAL:
      return merge(newState, { ephemeral: action.obj });

    case RECEIVE_CANVAS:
      let createWithDraw = (obj) => createObject(obj, newState.draw);
      newState.map = action.canvas.map.map(createWithDraw);
      newState.token = action.canvas.token.map(createWithDraw);

      return newState;

    case RECEIVE_LAYER:
      return merge(newState, { layer: action.layer });

    default:
      // console.log("CR Default");
      return state;
  }

};

export default CanvasReducer;
