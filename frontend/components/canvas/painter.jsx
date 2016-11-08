import React from 'react';
import CanvasView from './canvas_view';
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
      state: props.canvas,
      update: idUpdate,
      el: canvas,
      ctx: context
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
    // let boundSetup = this._setupCanvas.bind(this);
    // window.addEventListener("resize", (e) => {
    //   console.log("RESIZE");
    //   boundSetup(this.props);
    // });
    this._setupCanvas(this.props);
    this.canvas_view.start();
  }

  render() {
    return <div></div>;
  }
}

export default Painter;
