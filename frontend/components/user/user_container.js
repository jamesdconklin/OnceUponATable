import { connect } from 'react-redux';
import React from 'react';
import User from 'User';

const mapStateToProps = ({gameIndex, session}) => ({
  run: gameIndex.run,
  played: gameIndex.played,
  user: gameIndex.user,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
