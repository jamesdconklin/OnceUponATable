import { REQUEST_ASSETS, receiveAssets } from 'AssetActions';
import { fetchAssets } from 'AssetUtil';

export default ({dispatch}) => next => action => {
  // console.log("Asset Middleware caught", action);
  switch (action.type) {
    case REQUEST_ASSETS:
      fetchAssets(action.title)(
        (assets) => dispatch(receiveAssets(assets))
      );
      break;
    default:
      // Pass
  }
  return next(action);
};
