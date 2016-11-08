import React from 'react';
import { connect } from 'react-redux';
import { requestAssets, receiveSelectedAsset }
  from '../../actions/asset_actions';
import Assets from './assets';

const mapStateToProps = ({assetLibrary}) => ({
  assets: assetLibrary.assets,
  selected: assetLibrary.selected
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssets: () => dispatch(requestAssets()),
  setSelected: (asset) => dispatch(receiveSelectedAsset(asset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assets);
