import demo from '../util/demo_login';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const DEMO_LOGIN = "DEMO_LOGIN";

export const demoLogin = () => ({
    type: DEMO_LOGIN,
    user: demo
});

export const login = (user) => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});
