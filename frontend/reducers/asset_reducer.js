import { RECEIVE_SELECTED_ASSET, RECEIVE_ASSETS, RECEIVE_ASSET_PARAMS }
  from '../actions/asset_actions';

const _defaultState = {
  assets: [],
  selected: null,
  params: {
    lineColor: '#000000',
    fillColor: '#777777',
    lineWIdth: 7,
    asset_class: "square"
  }
};

export default (state = _defaultState, action) => {
  // console.log("Asset Reducer caught ", action);
  Object.freeze(state);
  let { assets, selected, params } = state;
  switch (action.type) {
    case RECEIVE_ASSET_PARAMS:
      return ({
        selected,
        assets,
        params: action.params
      });
    case RECEIVE_ASSETS:
      return ({
        selected,
        assets: action.assets,
        params
      });
    case RECEIVE_SELECTED_ASSET:
      return ({
        selected: action.asset,
        assets,
        params
      });
    default:
      return {assets, selected};
  }
};
