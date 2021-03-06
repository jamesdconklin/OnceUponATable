import React from 'react';
import GameIndexItem from 'GameIndexItem';

export default ({games, type}) => {
  return (
    <div className="game-index">
        <h2>{type}:</h2>
      <ul>
        {games.map(
          game => <GameIndexItem key={`${type}-${game.id}`} game={game}/>
        )}
      </ul>
    </div>
  );
};
