import { RECEIVE_SELECTED_ASSET, RECEIVE_ASSETS }
  from '../actions/asset_actions';

const _defaultState = {
  assets: [],
  selected: null
};

export default (state = _defaultState, action) => {
  console.log("Asset Reducer caught ", action);
  Object.freeze(state);
  let { assets, selected } = state;
  switch (action.type) {
    case RECEIVE_ASSETS:
      return ({
        selected,
        assets: action.assets
      });
    case RECEIVE_SELECTED_ASSET:
      return ({
        selected: action.asset,
        assets
      });
    default:
      return {assets, selected};
  }
};
