export const fetchGames = (query) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games?${query}`,
    type: "GET",
    success,
    error,
  });
};

export const fetchGame = (id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${id}`,
    type: "GET",
    success,
    error,
  });
};

export const deleteGame = (id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${id}`,
    type: "DELETE",
    success,
    error,
  });
};

export const createGame = (game) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games`,
    type: "POST",
    data: {game},
    success,
    error,
  });
};

export const updateGame = (game) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${game.id}`,
    type: "PATCH",
    data: {game},
    success,
    error,
  });
};

export const signUp = (game_id, user_id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${game_id}/players`,
    method: "POST",
    data: {game_signup: {user_id}},
    success,
    error,
  });

};

export const signOff = (game_id, user_id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${game_id}/players`,
    method: "DELETE",
    data: {game_signup: {user_id}},
    success,
    error,
  });

};
