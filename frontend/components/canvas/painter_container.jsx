import React from 'react';
import { connect } from 'react-redux';
import Painter from './painter';
import { updateCanvas } from '../../actions/canvas_actions';

const mapStateToProps = ({canvas, assets}) => ({
  canvas: canvas,
});

const mapDispatchToProps = (dispatch) => ({
  update: (id) => (layer, delta) => dispatch(updateCanvas(id, layer, delta))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Painter);
