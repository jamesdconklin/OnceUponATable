import { RECEIVE_CANVAS, RECEIVE_OBJECT }
  from '../actions/canvas_actions';
import { merge } from 'lodash';

const _defaultState = {
  map: [],
  token: []
};

const CanvasReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  // console.log("CanvasReducer caught", action);

  switch (action.type) {
    case RECEIVE_CANVAS:
      return action.canvas;

    case RECEIVE_OBJECT: {
      let obj = action.obj;
      let objects = newState[action.layer];
      for (var i = 0; i < objects.length; i++) {
        if (objects[i].id === obj) {
          newState[action.layer] =  objects.slice(0,i)
                                    .concat(objects.slice(i))
                                    .concat(obj);
          return newState;
        }
      }
      newState[action.layer] = newState[action.layer].concat(obj);
      return state;
    }
    default:
      // console.log("CR Default");

      return state;
  }

};

export default CanvasReducer;
