import React from 'react';

export default ({children}) =>  (
  <div>
    <canvas id="game-canvas" width="962" height="642"></canvas>
    {children}
  </div>
);
