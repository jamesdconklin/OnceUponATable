import { fetchCanvas, updateCanvas } from '../util/canvas_api_util';
import { REQUEST_CANVAS, receiveCanvas, receiveObject }
  from '../actions/canvas_actions';

const CanvasMiddleware = ({dispatch}) => next => action => {
  console.log("CanvasMiddleware caught", action);
  switch (action.type) {
    case REQUEST_CANVAS:
      fetchCanvas(action.id)(
        canvas => dispatch(receiveCanvas(canvas))
      );
    default:
      return next(action);
  }
};

export default CanvasMiddleware;
