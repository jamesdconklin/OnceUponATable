import React from 'react';
import { connect } from 'react-redux';
import GameForm from './game_form';
import { requestGameDetail, updateGame, createGame }
  from '../../actions/game_detail_actions';
import { fetchGame } from '../../util/game_api_util';
var edit;

const mapStateToProps = (state, ownProps) => {
  edit = !(ownProps.routeParams.game_id === undefined);
  return ({
    gameDetail: state.gameDetail,
    errors: state.gameDetail.errors || [],
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
  requestGameDetail: () => dispatch(
    requestGameDetail(ownProps.routeParams.game_id)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameForm);
