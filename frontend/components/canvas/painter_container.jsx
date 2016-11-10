import React from 'react';
import { connect } from 'react-redux';
import Painter from './painter';
import { updateCanvas, receiveCanvas, receiveLayer } from '../../actions/canvas_actions';
import { receiveAssetParams } from '../../actions/asset_actions';

const mapStateToProps = ({canvas, assetLibrary}) => ({
  canvas: canvas,
  asset: assetLibrary.selected,
  assetParams: assetLibrary.asset_params
});

const mapDispatchToProps = (dispatch) => ({
  update: (id) => (layer, delta) => dispatch(updateCanvas(id, layer, delta)),
  sendCanvas: (canvas) => dispatch(receiveCanvas(canvas)),
  sendParams: (params) => dispatch(receiveAssetParams(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Painter);
