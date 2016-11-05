import { merge } from 'lodash';
import { RECEIVE_GAME_DETAIL } from '../actions/game_detail_actions';

const _defaultState = {
    id: 0,
    title: "",
    system: "",
    description: "",
    gm: {
      id: 0,
      username: ""
    },
    active: false,
    players: [],
    max_players: null,
    current_player: 0
  };

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_GAME_DETAIL:
      return action.game;
    default:
      return newState;
  }
};
