import { fetchCanvas, patchCanvas } from 'CanvasUtil';
import { REQUEST_CANVAS, receiveCanvas, receiveObject, UPDATE_CANVAS }
  from 'CanvasActions';

const CanvasMiddleware = ({dispatch}) => next => action => {
  // console.log("CanvasMiddleware caught", action);
  switch (action.type) {
    case REQUEST_CANVAS:
      fetchCanvas(action.id)(
        canvas => dispatch(receiveCanvas(canvas))
      );
      break;
    case UPDATE_CANVAS:
      // Optimistically update locally.
      dispatch(receiveObject(action.delta, action.layer));
      patchCanvas(action.id, action.layer, action.delta)(
        canvas => dispatch(receiveCanvas(canvas))
      );
      break;
  }
  return next(action);
};

export default CanvasMiddleware;
