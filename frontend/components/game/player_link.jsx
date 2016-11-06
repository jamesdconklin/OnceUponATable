import React from 'react';
import { Link } from 'react-router';

export default ({player}) => (
  <li>
    <Link to={`users/${player.id}`}>
      <img className="icon" alt={`${player.username}'s icon`}
        title={player.username}
        src={player.image_url}/>
    </Link>
  </li>
);

// src={player.image_url}/>
