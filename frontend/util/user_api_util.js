export const fetchUser = (id) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `api/users/${id}`,
    method: "GET",
    success,
    error
  });
};
