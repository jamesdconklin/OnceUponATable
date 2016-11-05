import { merge } from 'lodash';
import { RECEIVE_GAME_DETAIL, CLEAR_GAME_DETAIL, RECEIVE_GAME_ERRORS }
  from '../actions/game_detail_actions';

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
    current_player: 0,
    errors: []
  };

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  console.log("GDR caught: ", action);
  switch (action.type) {
    case RECEIVE_GAME_ERRORS:
      newState.errors = action.errors;
      return newState;

    case CLEAR_GAME_DETAIL:
     return _defaultState;

    case RECEIVE_GAME_DETAIL:
      action.game.errors = [];
      return action.game;
    default:
      return newState;
  }
};
