import React from 'react';
import { login, demoLogin } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
