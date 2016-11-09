export const fetchAssets = (title) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `/api/assets?title=${title}`,
    type: "GET",
    success,
    error,
  });
};
