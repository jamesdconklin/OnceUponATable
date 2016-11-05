export const RECEIVE_GAME_DETAIL = "RECEIVE_GAME_DETAIL";
export const REQUEST_GAME_DETAIL = "REQUEST_GAME_DETAIL";
export const ENLIST = "ENLIST";
export const DE_ENLIST = "DE_ENLIST";

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
