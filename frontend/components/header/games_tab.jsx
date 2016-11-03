import React from 'react';
import { Link } from 'react-router';

export default ({userId}) => {
  let ret;
  if (userId) {
    ret = (
      <div className="center-vert">
        <Link to={`/users/${userId}`}>Games</Link>
      </div>
    );
  } else {
    ret = (
      <div className="center-vert">
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
  return ret;
};
