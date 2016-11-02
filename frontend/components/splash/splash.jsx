import React from 'react';
import { Link, hashHistory } from 'react-router';

const elf = {
  username: "elfwizard",
  password: "password"
};

export default ({login}) => (
  <section className="content-center flex-between">
    <section className="splash-desc-container">
      <section className="splash-desc">
        <h1>You'll always be welcome at our table.</h1>
        <Link to="/signup">Sign Up Now!</Link>
        <a onClick={(e) => login(elf)}>Try now!</a>
      </section>
    </section>
    <section className="splash-image-container">
    </section>
  </section>
);
