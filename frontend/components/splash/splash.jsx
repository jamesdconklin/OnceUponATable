import React from 'react';
import { Link, hashHistory } from 'react-router';
import demoLogin from '../../util/demo_login';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.router.push("/");
    }
  }

  render() {
    let {login} = this.props;
    return (
      <section className="content center-horiz splash-bg">
        <section className="content-center flex-between">
          <section className="splash-desc-container">
            <section className="splash-desc">
              <section className="splash-header">
                <h1>You'll always have a seat at our table.</h1>
              </section>
              <section className="splash-body">
                <p>
                  With an internet connection and a little imagination,
                  across the world might as well be across the table.
                  Distances are only as great as you let them seem, but
                  your own realms can be as grand as you can dream.
                </p>
                <p>
                  Join or create a game today!
                </p>
              <Link to="/signup" className="button">Sign Up Now!</Link>
              <a className="button" onClick={(e) => login(demoLogin)}>Try now!</a>
            </section>
          </section>
          </section>
          <section className="splash-image-container">
            <img src="http://res.cloudinary.com/jdc-asset-server/image/upload/v1478482498/Splash_boaxvm.png"/>
          </section>
        </section>
    </section>
    );
  }
}

export default Splash;
