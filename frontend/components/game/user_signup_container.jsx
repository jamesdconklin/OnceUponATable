import React from 'react';
import { connect } from 'react-redux';
import UserSignup from './user_signup';
import { enlist } from '../../actions/game_detail_actions';

const mapStateToProps = ({gameDetail}) => ({
  players: gameDetail.players,
  game_id: gameDetail.id
});

const mapDispatchToProps = (dispatch) => ({
  signup: (userId, gameId) => (e) => dispatch(enlist(userId, gameId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignup);
