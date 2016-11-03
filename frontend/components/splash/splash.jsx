import React from 'react';
import { Link, hashHistory } from 'react-router';
import demoLogin from '../../util/demo_login';

export default ({login}) => (
  <section className="content-center flex-between">
    <section className="splash-desc-container">
      <section className="splash-desc">
        <h1>You'll always be welcome at our table.</h1>
        <br/>
        <Link to="/signup">Sign Up Now!</Link>
        <br/>
        <br/>
        <a onClick={(e) => login(demoLogin)}>Try now!</a>
      </section>
    </section>
    <section className="splash-image-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </section>
);
