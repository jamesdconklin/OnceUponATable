import React from 'react';
import { connect } from 'react-redux';
import { login, signup, logout } from 'SessionActions';
import Header from 'Header';

const mapStateToProps = ({session}) => ({
  userId: (session.currentUser ? session.currentUser.id : null),
  userName: (session.currentUser ? session.currentUser.username : null)
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
