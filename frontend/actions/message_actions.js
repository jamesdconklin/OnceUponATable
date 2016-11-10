export const REQUEST_MESSAGES = "REQUEST_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const POST_MESSAGE = "POST_MESSAGE";

export const postMessage = (game_id, message) =>  ({
    type: POST_MESSAGE,
    game_id,
    message
});

export const requestMessages = (game_id) => ({
  type: REQUEST_MESSAGES,
  game_id
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});
