export const fetchMessages = (game_id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${game_id}/messages`,
    type: "GET",
    success,
    error,
  });
};

export const postMessage = (game_id, body) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/games/${game_id}/messages`,
    type: "POST",
    data: {
      message: {
        body
      }
    },
    success,
    error,
  });
};
