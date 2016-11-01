import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formType: (ownProps.location.pathname === "/signup") ? "Sign Up" : "Log In",
    processForm: ({user}) => {
      if (ownProps.location.pathname === "/signup") {
        dispatch(signup(user));
      } else if (ownProps.location.pathname === "/login") {
        dispatch(login(user));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
