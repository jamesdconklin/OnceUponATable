import React from 'react';
import { Link } from 'react-router';

export default ({player}) => (
  <li>
    <Link to={`users/${player.id}`}>
      <img className="user-link" alt={`${player.username}'s icon`}/>
    </Link>
  </li>
);
