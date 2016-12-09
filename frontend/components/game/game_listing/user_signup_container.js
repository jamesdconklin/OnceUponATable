import React from 'react';
import { connect } from 'react-redux';
import UserSignup from 'UserSignup';
import { enlist } from 'GameListingActions';

const mapStateToProps = ({gameListing}) => ({
  players: gameListing.players,
  game_id: gameListing.id
});

const mapDispatchToProps = (dispatch) => ({
  signup: (userId, gameId) => (e) => dispatch(enlist(userId, gameId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignup);
