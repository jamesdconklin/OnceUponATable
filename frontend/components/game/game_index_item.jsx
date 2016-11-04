import React from 'react';
import { Link } from 'react-router';

export default ({game}) => (
  <li>
    <div>
      <Link to={`/games/${game.id}`}>
        {game.title}
      </Link> by <Link to={`/users/${game.gm.id}`}>
        {game.gm.username}
      </Link>
    </div>
    <div>

    </div>
  </li>
);
