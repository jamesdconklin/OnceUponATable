import React from 'react';
import AssetsContainer from 'AssetsContainer';
import MessagesContainer from 'MessagesContainer';
import ToolboxContainer from 'ToolboxContainer';


export default ({children}) =>  {
  return (
    <div className="whole-page">
      <div className="scroller">
        <canvas id="game-canvas" width="1920" height="1080" tabIndex='1'>
          Game Map
        </canvas>
      </div>
      {children}
      <MessagesContainer/>
      <AssetsContainer/>
      <ToolboxContainer/>
    </div>
  );
};
