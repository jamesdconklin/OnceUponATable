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
  switch (action.type) {
    case LOGOUT:
      console.log("SessionReducer LOGOUT caught", action);
      return _defaultState;

    case RECEIVE_ERRORS:
      console.log("SessionReducer RE caught", action);
      return merge(newState, {errors: action.errors.responseJSON});

    case RECEIVE_CURRENT_USER:
      console.log("SessionReducer RCU caught", action);
      hashHistory.push("/");

      return {currentUser: action.user, errors: []};

    default:
    console.log("SessionReducer DEFAULT caught", action);
    return newState;
  }
};

export default SessionReducer;
