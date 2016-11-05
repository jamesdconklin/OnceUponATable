import { connect } from 'react-redux';
import React from 'react';
import User from './user';

const mapStateToProps = ({gamesList, session}) => ({
  run: gamesList.run,
  played: gamesList.played,
  user: gamesList.user,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
