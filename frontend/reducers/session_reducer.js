//Actions
import { LOGOUT, RECEIVE_ERRORS, RECEIVE_CURRENT_USER }
  from '../actions/session_actions';
//Action Creators
import { login, receiveErrors, receiveCurrentUser }
  from '../actions/session_actions';
import { merge } from 'lodash';
import { hashHistory } from 'react-router';

const _defaultState = {
  currentUser: null,
  errors: []
};

export const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  console.log("SessionReducer caught", action);
  switch (action.type) {
    case LOGOUT:
      hashHistory.push("/");
      return _defaultState;

    case RECEIVE_ERRORS:
      return merge(newState, {errors: action.errors.responseJSON});

    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user, errors: []};

    default:
      return newState;
  }
};

export default SessionReducer;
