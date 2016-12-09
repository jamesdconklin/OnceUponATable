import React from 'react';
import { Link } from 'react-router';
import { CloudinaryImage, cloudinaryConfig } from 'react-cloudinary';

export default ({player, userId, gmId, deEnlist}) => {
  cloudinaryConfig({cloud_name: window.cloudName});
  return (
    <li>
      <div className="player-link">
        <Link to={`users/${player.id}`}>
          <CloudinaryImage publicId={player.image_url}
            options={{width: 80, crop: "scale"}}
            className="icon" title={player.username}
            alt={`${player.username}'s icon'`}/>
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
};

// src={player.image_url}/>
