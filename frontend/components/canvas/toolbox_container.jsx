import { connect } from 'react-redux';
import React from 'react';

import { receiveLayer } from '../../actions/canvas_actions';
import { receiveAssetParams } from '../../actions/asset_actions';

import Toolbox from './toolbox';

const mapStateToProps = ({assetLibrary, canvas}) =>  ({
  assetParams: assetLibrary.asset_params,
  layer: canvas.layer
});

const mapDispatchToProps = (dispatch) => ({
  sendParams: (params) => dispatch(receiveAssetParams(params)),
  setLayer: (layer) => dispatch(receiveLayer(layer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbox);
