//Actions
import { LOGOUT, LOGIN, SIGNUP }
  from '../actions/session_actions';
//Action Creators
import { login,logout, signup, receiveErrors, receiveCurrentUser }
  from '../actions/session_actions';
//API Utils
import * as api from '../util/session_api_util';



const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const errorHandler = error => dispatch(receiveErrors(error));
  const sessionSuccess = user => dispatch(receiveCurrentUser(user));
  switch (action.type) {
    case LOGOUT:
      console.log("SessionMiddlewre DEFAULT caught", action);
      api.logout(
        () => next(action)
      );
      break;

    case LOGIN:
      console.log("SessionMiddlewre LOGOUT caught", action);
      api.login({user: action.user})(sessionSuccess, errorHandler);
      return next(action);

    case SIGNUP:
      console.log("SessionMiddlewre SIGNUP caught", action);
      api.signup({user: action.user})(sessionSuccess, errorHandler);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
