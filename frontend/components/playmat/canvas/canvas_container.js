import React from 'react';
import { connect } from 'react-redux';
import Canvas from 'Canvas';

import {
  setDrawFn,
  updateCanvas,
  receiveCanvas,
  receiveLayer,
  receiveFocus,
  receiveEphemeral
} from 'CanvasActions';

import {
  receiveAssetParams,
  receiveSelectedAsset
} from 'AssetActions';

const mapStateToProps = ({canvas, assetLibrary}) => ({
  canvas,
  asset: assetLibrary.selected,
  assetParams: assetLibrary.asset_params
});

const mapDispatchToProps = (dispatch) => ({
  update: (id) => (layer, delta) => dispatch(updateCanvas(id, layer, delta)),
  sendCanvas: (canvas) => dispatch(receiveCanvas(canvas)),
  sendParams: (params) => dispatch(receiveAssetParams(params)),
  sendFocus: (focus) => dispatch(receiveFocus(focus)),
  sendEphemeral: (ephemeral) => dispatch(receiveEphemeral(ephemeral)),
  setDrawFn: (fn) => dispatch(setDrawFn(fn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
