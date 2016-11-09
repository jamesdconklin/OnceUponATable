export const RECEIVE_SELECTED_ASSET = "RECEIVE_SELECTED_ASSET";
export const RECEIVE_ASSETS = "RECEIVE_ASSETS";
export const REQUEST_ASSETS = "REQUEST_ASSETS";
export const RECEIVE_ASSET_PARAMS = "RECEIVE_ASSET_PARAMS";

export const receiveAssetParams = (params) => ({
  type: RECEIVE_ASSET_PARAMS,
  params
});

export const receiveAssets = (assets) => ({
  type: RECEIVE_ASSETS,
  assets
});

export const receiveSelectedAsset = (asset) => ({
  type: RECEIVE_SELECTED_ASSET,
  asset
});

export const requestAssets = (title) => ({
  type: REQUEST_ASSETS,
  title
});
