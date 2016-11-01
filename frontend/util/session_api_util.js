export const signup = (data) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/users",
    type: "POST",
    data,
    success,
    error,
  });
};

export const login = (data) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/session",
    type: "POST",
    data,
    success,
    error,
  });
};

export const logout = (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/session",
    type: "DELETE",
    success,
    error,
  });
};
