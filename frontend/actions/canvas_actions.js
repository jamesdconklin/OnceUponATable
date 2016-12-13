export const RECEIVE_CANVAS = "RECEIVE_CANVAS";
export const RECEIVE_OBJECT = "RECEIVE_OBJECT";
export const RECEIVE_FOCUS = "RECEIVE_FOCUS";
export const RECEIVE_EPHEMERAL = "RECEIVE_EPHEMERAL";
export const REQUEST_CANVAS = "REQUEST_CANVAS";
export const UPDATE_CANVAS = "UPDATE_CANVAS";
export const RECEIVE_LAYER = "RECEIVE_LAYER";
export const SET_DRAW_FN = "SET_DRAW_FN";

export const setDrawFn = (fn) => ({
  type: SET_DRAW_FN,
  fn
});

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

export const receiveFocus = (obj) => ({
  type: RECEIVE_FOCUS,
  obj
});

export const receiveEphemeral = (obj) => ({
  type: RECEIVE_EPHEMERAL,
  obj
});

export const receiveCanvas = (canvas) => ({
  type: RECEIVE_CANVAS,
  canvas
});

export const requestCanvas = (id) => ({
  type: REQUEST_CANVAS,
  id
});
