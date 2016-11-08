export const RECEIVE_SELECTED_ASSET = "RECEIVE_SELECTED_ASSET";
export const RECEIVE_ASSETS = "RECEIVE_ASSETS";
export const REQUEST_ASSETS = "REQUEST_ASSETS";

export const receiveAssets = (assets) => ({
  type: RECEIVE_ASSETS,
  assets
});

export const receiveSelectedAsset = (asset) => ({
  type: RECEIVE_SELECTED_ASSET,
  asset
});

export const requestAssets = () => ({
  type: REQUEST_ASSETS
});
