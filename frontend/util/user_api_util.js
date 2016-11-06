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

export const fetchUsers = (name) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: `api/users?name=${name}`,
    method: "GET",
    success,
    error
  });
};
