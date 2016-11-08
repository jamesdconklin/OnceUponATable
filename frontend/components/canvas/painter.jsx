import React from 'react';
import CanvasView from './canvas_view';
import { merge } from 'lodash';

class Painter extends React.Component {
  constructor(props) {
    super(props);
    this.canvas_view = null;
  }

  componentWillReceiveProps(nextProps) {
    console.log("Painter sends", nextProps.canvas);
    this.canvas_view && this.canvas_view.send(nextProps.canvas);
  }

  componentDidMount() {
    let canvas = document.getElementById("game-canvas");
    let context = canvas.getContext("2d");
    // window.el = canvas;
    this.canvas_view = new CanvasView(context, canvas, this.canvas_state);
    this.canvas_view.send(this.props.canvas);
    this.canvas_view.start();
  }

  render() {
    return <div>TEST</div>;
  }
}

export default Painter;
