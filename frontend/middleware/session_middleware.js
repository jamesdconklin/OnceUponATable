//Actions
import { LOGOUT, LOGIN, SIGNUP, DEMO_LOGIN }
  from '../actions/session_actions';
//Action Creators
import { login,logout, signup, receiveErrors, receiveCurrentUser }
  from '../actions/session_actions';
//API Utils
import * as api from '../util/session_api_util';
import { hashHistory } from 'react-router';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const errorHandler = error => {
    dispatch(receiveErrors(error));
  };

  const sessionSuccess = user => dispatch(receiveCurrentUser(user));
  const demoSuccess = user => {
    sessionSuccess(user);
    hashHistory.push("/canvas/4");
  };
  // console.log("SessionMiddleware caught", action);
  switch (action.type) {
    case LOGOUT:
      api.logout(
        () => {
          dispatch(receiveCurrentUser(null));
          hashHistory.push("/");
          next(action);
        }
      );
      break;

    case DEMO_LOGIN:
      api.login({user: action.user})(demoSuccess, errorHandler);
      return next(action);

    case LOGIN:
      api.login({user: action.user})(sessionSuccess, errorHandler);
      return next(action);

    case SIGNUP:
      api.signup({user: action.user})(sessionSuccess, errorHandler);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
