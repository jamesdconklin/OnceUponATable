import { fetchCanvas, patchCanvas } from '../util/canvas_api_util';
import { REQUEST_CANVAS, receiveCanvas, receiveObject, UPDATE_CANVAS }
  from '../actions/canvas_actions';

const CanvasMiddleware = ({dispatch}) => next => action => {
  console.log("CanvasMiddleware caught", action);
  switch (action.type) {
    case REQUEST_CANVAS:
      fetchCanvas(action.id)(
        canvas => dispatch(receiveCanvas(canvas))
      );
      break;
    case UPDATE_CANVAS:
      patchCanvas(action.id, action.layer, action.delta)(
        canvas => dispatch(receiveCanvas(canvas))
      );
      break;
  }
  return next(action);
};

export default CanvasMiddleware;
