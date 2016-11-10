import { RECEIVE_SELECTED_ASSET, RECEIVE_ASSETS, RECEIVE_ASSET_PARAMS }
  from '../actions/asset_actions';

import { merge } from 'lodash';

const _defaultState = {
  assets: [],
  selected: null,
  asset_params: {
    draw: false,
    lineColor: '#000000',
    fillColor: '#777777',
    fill: false,
    lineWidth: 7,
    asset_class: "square"
  }
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let { assets, selected, asset_params } = state;
  // console.log("Asset Reducer caught ", action);
  switch (action.type) {
    case RECEIVE_ASSET_PARAMS:
      return ({
        selected,
        assets,
        asset_params: merge(merge({}, state.asset_params), action.params)
      });
    case RECEIVE_ASSETS:
      return ({
        selected,
        assets: action.assets,
        asset_params
      });
    case RECEIVE_SELECTED_ASSET:
      return ({
        selected: action.asset,
        assets,
        asset_params
      });
    default:
      return {assets, selected, asset_params};
  }
};
