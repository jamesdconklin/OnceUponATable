// export const RECEIVE_LISTED_GAME = "RECEIVE_LISTED_GAME";
export const RECEIVE_LISTED_GAMES = "RECEIVE_LISTED_GAMES";
export const REQUEST_LISTED_GAMES = "REQUEST_LISTED_GAMES";
export const RECEIVE_LISTED_USER = "RECEIVE_LISTED_USER";
export const REQUEST_LISTED_USER = "REQUEST_LISTED_USER";

export const receiveListedGames = (category, games) => ({
  type: RECEIVE_LISTED_GAMES,
  category,
  games
});

export const requestListedUser = (id) => ({
  type: REQUEST_LISTED_USER,
  id
});

export const receiveViewedUser = (user) => ({
  type: RECEIVE_LISTED_USER,
  user
});

export const requestListedGames = (category, id) => ({
  type: REQUEST_LISTED_GAMES,
  category,
  id
});
