import { connect } from 'react-redux';
import GameDetail from './game_detail';
import React from 'react';
import { enlist } from '../../actions/game_detail_actions';


const mapStateToProps = ({gameDetail, session}) => ({
  gameDetail,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  enlist: (game_id, user_id) => (e) => {
    e.preventDefault();
    console.log(enlist);
    // console.log("howdy");
    dispatch(enlist(game_id, user_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetail);
