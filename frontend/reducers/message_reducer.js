import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from 'MessageActions';

  const _defaultState = [];

  export default (state = _defaultState, action) => {
    Object.freeze(state);
    // console.log("MessageReducer caught ", action);

    switch (action.type) {
      case RECEIVE_MESSAGES:
        return action.messages;
      case RECEIVE_MESSAGE:
        return state.concat(action.message);
      default:
        return state;
    }
  };
