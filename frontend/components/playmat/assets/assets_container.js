import React from 'react';
import { connect } from 'react-redux';
import { requestAssets, receiveSelectedAsset } from 'AssetActions';
import Assets from 'Assets';

const mapStateToProps = ({assetLibrary}) => ({
  assets: assetLibrary.assets,
  selected: assetLibrary.selected
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssets: (title) => dispatch(requestAssets(title)),
  setSelected: (asset) => dispatch(receiveSelectedAsset(asset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assets);
