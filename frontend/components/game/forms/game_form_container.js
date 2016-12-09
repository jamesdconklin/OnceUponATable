import React from 'react';
import { connect } from 'react-redux';
import GameForm from 'GameForm';
import { requestGameListing, updateGame, createGame }
  from 'GameListingActions';
import { fetchGame } from 'GameUtil';
var edit;

const mapStateToProps = (state, ownProps) => {
  edit = !(ownProps.routeParams.game_id === undefined);
  return ({
    gameListing: state.gameListing,
    errors: state.gameListing.errors || [],
    currentUser: state.session.currentUser,
    edit,
    type: edit ? "Edit Game" : "Create Game",
    setInitialState: function () {
      fetchGame(ownProps.routeParams.game_id)(
        (data) => {this.setState(data);}
      );
    }
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (game) => {
    if (edit) {
      dispatch(updateGame(game));
    } else {
      dispatch(createGame(game));
    }
  },
  requestGameListing: () => dispatch(
    requestGameListing(ownProps.routeParams.game_id)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameForm);
