import React from 'react';
import AssetsContainer from 'AssetsContainer';
import MessagesContainer from 'MessagesContainer';
import ToolboxContainer from 'ToolboxContainer';

import { getCursorPosition } from 'CanvasElementUtil';

import ImageAsset from 'ImageAsset';
import Square from 'Square';
import CanvasView from 'CanvasView';
import { merge } from 'lodash';

const WIDTH = 1920;
const HEIGHT = 1080;

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas_layers = { map: [], token: [] };
    this.moved = null;
    this.didMove = false;
    this.clickDiff = [0,0];
    this.object_store = {};
  }

  // Begin Lifecycle Methods

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount () {
    // Setup Canvas. We are not using react component state - rerendering
    // be triggred by calling draw() from componentWillReceiveProps
    let canvasElement = document.getElementById("game-canvas");
    let canvasContext = canvasElement.getContext("2d");
    let viewOptions = {};
    let controllerOptions = {};


    this.canvas_view = new CanvasView(canvasContext, viewOptions);

    this.props.setDrawFn(() => this.draw());

    this.draw();
  }

  componentWillReceiveProps(nextProps) {
    this.update= nextProps.update(nextProps.routeParams.game_id);
    this.canvas_view.draw(nextProps.canvas);
  }

  // End Lifecycle Methods
  // Begin Event Handlers

  handleKeyUp(e) {
    let { canvas, asset, update, sendEphemeral, sendFocus } = this.props;
    let { ephemeral, focus, layer } = this.props.canvas;
    if (focus) {
      switch (e.key) {
        case "Delete":
          this.deleteFocusObject();
          break;
        case "Backspace":
          this.deleteFocusObject();
          break;
        case "Escape":
          this.props.asset = null;
          sendEphemeral(null);
          sendFocus(null);
          this.draw();
          break;
        default:
          // console.log(e);
      }
    }
  }

  handleMouseUp(e) {
    let { canvas, asset, update, sendEphemeral, sendFocus } = this.props;
    let { ephemeral, focus, layer } = this.props.canvas;
    let pos = getCursorPosition(e.target, e);
    let [x,y] = pos;
    if (ephemeral && Math.min(
      Math.abs(ephemeral.width), Math.abs(ephemeral.height)
    ) > 5) {
      this.update(layer, ephemeral);
    } else if (this.moved) {

      if (this.didMove) {
        this.didMove = false;
        this.update(layer, this.moved);
      }

    } else if (asset) {
      let assetDefinition = merge({
        pos: [x - asset.width/2, y - asset.height/2]
      }, asset);

      let [sanityX, sanityY] = assetDefinition.pos;
      if (sanityX <= 1920 && sanityY <= 1080 && sanityX >= 0 && sanityY >= 0) {

        let assetObject = this.createObject(assetDefinition);
        sendFocus(assetObject);
        this.update(layer, assetObject);
      }
    }
    sendEphemeral(null);
    this.moved = null;
  }

  handleMouseDown(e) {
    let { canvas, assetParams, sendEphemeral, sendFocus } = this.props;
    let { ephemeral, focus, layer} = this.props.canvas;

    if (ephemeral || this.moved) {
      return;
    }

    let pos = getCursorPosition(e.target, e);

    let objects = canvas[layer];

    if (assetParams.draw) {
      var newEphemeral = new Square({
        pos, height: 1,
        width: 1,
        lineColor: assetParams.lineColor,
        fillColor: assetParams.fill && assetParams.fillColor,
        lineWidth: assetParams.lineWidth
      });
      sendFocus(newEphemeral);
      sendEphemeral(newEphemeral);
    }
    else {
      for (var i = objects.length-1; i >= 0; i--) {
        if ((this.clickDiff = objects[i].isClicked(pos))) {
          sendFocus(objects[i]);
          this.moved = objects[i];
          return;
        }
      }
      sendFocus(null);
    }

    this.moved = null;

    this.draw();
  }

  handleMouseMove(e) {
    let { update } = this.props;
    let { ephemeral, layer } = this.props.canvas;

    let [x, y] = getCursorPosition(e.target, e);
    if (ephemeral) {
      let [eX, eY] = ephemeral.pos;
      ephemeral.width = x-eX;
      ephemeral.height = y-eY;
    } else if (this.moved) {
      this.didMove = true;
      let newX = x - this.clickDiff[0];
      let newY = y - this.clickDiff[1];
      this.moved.pos = [newX, newY];
      // this.update(layer, this.moved);
    }
    (ephemeral || this.didMove) && this.draw();
  }

  // End Event Handlers
  // Begin State Change Functions

  deleteFocusObject() {
    this.update(
      this.layer,
      merge(this.focusObject, { asset_class: 'delete'})
    );
    this.props.sendFocus(null);
    this.moved = null;
  }

  draw() {
    this.canvas_view.draw(this.props.canvas);
  }

  render () {
    let {children} = this.props;
    return (
      <div className="whole-page">
        <div className="scroller">
          <canvas id="game-canvas" width={WIDTH} height={HEIGHT} tabIndex='1'
                  onMouseDown={this.handleMouseDown.bind(this)}
                  onMouseMove={this.handleMouseMove.bind(this)}
                  onMouseUp={this.handleMouseUp.bind(this)}
                  onKeyUp={this.handleKeyUp.bind(this)}>
            Game Map
          </canvas>
        </div>
        {children}
        <MessagesContainer/>
        <AssetsContainer/>
        <ToolboxContainer/>
      </div>
    );
  }
}

export default Canvas;
