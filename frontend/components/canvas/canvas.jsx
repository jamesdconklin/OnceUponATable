import React from 'react';
import AssetsContainer from '../assets/assets_container';

export default ({children}) =>  (
  <div className="whole-page">
    <div overflow="scroll">
      <canvas id="game-canvas" width="1920" height="1080" tabIndex='1'>
        Game Map
      </canvas>
    </div>
    <AssetsContainer/>
    {children}
  </div>
);
