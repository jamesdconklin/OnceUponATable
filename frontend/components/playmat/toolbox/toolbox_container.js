import { connect } from 'react-redux';
import React from 'react';

import { receiveLayer } from 'CanvasActions';
import { receiveAssetParams } from 'AssetActions';

import Toolbox from 'Toolbox';

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
