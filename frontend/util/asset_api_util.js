export const fetchAssets = (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/assets`,
    type: "GET",
    success,
    error,
  });
};
