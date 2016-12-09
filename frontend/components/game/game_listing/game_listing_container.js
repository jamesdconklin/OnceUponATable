import { connect } from 'react-redux';
import GameListing from 'GameListing';
import React from 'react';
import { enlist, deEnlist } from 'GameListingActions';


const mapStateToProps = ({gameListing, session}) => ({
  gameListing,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  enlist: (game_id, user_id) => (e) => {
    e.preventDefault();
    dispatch(enlist(game_id, user_id));
  },
  deEnlist: (game_id, user_id) => (e) => {
    e.preventDefault();
    dispatch(deEnlist(game_id, user_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameListing);
