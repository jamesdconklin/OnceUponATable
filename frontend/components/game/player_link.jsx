import React from 'react';
import { Link } from 'react-router';

export default ({player, userId, gmId, deEnlist}) => (
  <li>
    <div className="player-link">
      <Link to={`users/${player.id}`}>
        <img className="icon" alt={`${player.username}'s icon`}
          title={player.username}
          src={player.image_url}/>
      </Link>
    {
      (gmId === userId || player.id === userId ? (
        <div className="icon small" onClick={deEnlist}
             title={`Remove ${player.username}`}>
          X
        </div>
        ) : '')
    }
  </div>
  </li>
);

// src={player.image_url}/>
