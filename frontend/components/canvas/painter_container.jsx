import React from 'react';
import { connect } from 'react-redux';
import Painter from './painter';

const mapStateToProps = ({canvas, assets}) => ({
  canvas: canvas
});

const mapDispatchToProps = (dispatch) => ({foo: "bar"});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Painter);
