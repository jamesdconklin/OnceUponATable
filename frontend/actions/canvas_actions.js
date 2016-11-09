export const RECEIVE_CANVAS = "RECEIVE_CANVAS";
export const RECEIVE_OBJECT = "RECEIVE_OBJECT";
export const REQUEST_CANVAS = "REQUEST_CANVAS";
export const UPDATE_CANVAS = "UPDATE_CANVAS";
export const RECEIVE_LAYER = "RECEIVE_LAYER";

export const receiveLayer = (layer) => ({
  type: RECEIVE_LAYER,
  layer
});

export const updateCanvas = (id, layer, delta) => ({
  type: UPDATE_CANVAS,
  id,
  layer,
  delta
});

export const receiveObject = (obj, layer) => ({
  type: RECEIVE_OBJECT,
  obj,
  layer
});

export const receiveCanvas = (canvas) => ({
  type: RECEIVE_CANVAS,
  canvas
});

export const requestCanvas = (id) => ({
  type: REQUEST_CANVAS,
  id
});
