import { merge } from 'lodash';

// export const fetchGames = (query) => (success, error) => {

//
//   $.ajax({
//     url: `/api/games?${query}`,
//     type: "GET",
//     success,
//     error,
//   });
// };

export const fetchCanvas = (id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;
  $.ajax({
    url: `/api/games/${id}/canvas`,
    method: 'GET',
    success,
    error
  });

};

export const patchCanvas = (id, layer, delta) => (success, error) => {
  success = success || console.log;
  error = error || console.log;
  $.ajax({
    url: `/api/games/${id}/canvas`,
    method: 'PATCH',
    data: {
      delta,
      layer
    },
    success,
    error
  });
};
