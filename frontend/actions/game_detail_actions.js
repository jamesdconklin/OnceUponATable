export const RECEIVE_GAME_DETAIL = "RECEIVE_GAME_DETAIL";
export const REQUEST_GAME_DETAIL = "REQUEST_GAME_DETAIL";
export const ENLIST = "ENLIST";
export const DE_ENLIST = "DE_ENLIST";
export const UPDATE_GAME = "UPDATE_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const CLEAR_GAME_DETAIL = "CLEAR_GAME_DETAIL";
export const RECEIVE_GAME_ERRORS = "RECEIVE_GAME_ERRORS";

export const receiveGameErrors = (errors) => ({
  type: RECEIVE_GAME_ERRORS,
  errors
});

export const clearGameDetail = () => ({
  type: CLEAR_GAME_DETAIL
});

export const updateGame = (game) => ({
  type: UPDATE_GAME,
  game
});

export const createGame = (game) => {
  return ({
    type: CREATE_GAME,
    game
  });
};


export const receiveGameDetail = (game) => ({
  type: RECEIVE_GAME_DETAIL,
  game
});

export const requestGameDetail = (id) => ({
  type: REQUEST_GAME_DETAIL,
  id
});

export const enlist = (game_id, user_id) => ({
  type: ENLIST,
  game_id,
  user_id
});
export const deEnlist = (game_id, user_id) => ({
  type: DE_ENLIST,
  game_id,
  user_id
});
