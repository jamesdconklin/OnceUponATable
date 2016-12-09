/*globals Pusher*/

import React from 'react';
import CanvasView from 'CanvasView';
import AssetContainer from 'AssetsContainer';
import { merge } from 'lodash';

class Painter extends React.Component {
  constructor(props) {
    super(props);
    this.canvas_view = null;
  }

  componentWillReceiveProps(nextProps) {
    this.canvas_view && this._setupCanvas(nextProps);
  }

  _setupCanvas(props) {
    let canvas = document.getElementById("game-canvas");
    let context = canvas.getContext("2d");
    let idUpdate = this.props.update(props.routeParams.game_id);
    this.canvas_view.send({
      asset: props.asset,
      state: props.canvas,
      update: idUpdate,
      el: canvas,
      ctx: context,
      layer: props.canvas.layer,
      assetParams: props.assetParams,
      sendParams: props.sendParams
    });
  }

  componentDidMount() {
    let canvas = document.getElementById("game-canvas");
    let context = canvas.getContext("2d");
    let idUpdate = this.props.update(this.props.routeParams.game_id);
    this.canvas_view = new CanvasView(
      context, canvas,
      idUpdate
    );
    var pusher = new Pusher(window.pusherApiKey);
    var channel = pusher.subscribe(`canvas_${this.props.routeParams.game_id}`);
    channel.bind(
      'canvas_update',
      (data) => {
        this.props.sendCanvas(data);
      }
    );

    this._setupCanvas(this.props);

    this.canvas_view.start();
  }

  render() {
    return <div></div>;
  }
}

export default Painter;
