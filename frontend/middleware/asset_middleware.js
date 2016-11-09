import { REQUEST_ASSETS, receiveAssets } from '../actions/asset_actions';
import { fetchAssets } from '../util/asset_api_util';

export default ({dispatch}) => next => action => {
  // console.log("Asset Middleware caught", action);
  switch (action.type) {
    case REQUEST_ASSETS:
      fetchAssets(
        (assets) => dispatch(receiveAssets(assets))
      );
      break;
    default:
      // Pass
  }
  return next(action);
};
