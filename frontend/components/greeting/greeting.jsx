import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ret;

    if (this.props.currentUser) {
      ret = (
        <div key="user-header">
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      ret = (
        <div key="user-header">
          <h2>Welcome, Guest</h2>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
    return ret;
  }
}

export default Greeting;
