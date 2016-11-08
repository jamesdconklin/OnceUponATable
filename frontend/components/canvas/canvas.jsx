import React from 'react';

export default ({children}) =>  (
  <div overflow="scroll">
    <canvas id="game-canvas" width="1920" height="1080" tabIndex='1'>
      Game Map
    </canvas>
    {children}
  </div>
);
