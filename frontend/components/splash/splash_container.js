import React from 'react';
import { login, demoLogin } from 'SessionActions';
import { connect } from 'react-redux';
import Splash from 'Splash';

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
