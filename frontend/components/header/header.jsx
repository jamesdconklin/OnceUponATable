import React from 'react';

import GamesTab from 'GamesTab';
import UserTab from 'UserTab';

import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let {userId, userName, login, logout} = this.props;
    return (
      <header className="center-horiz">
        <section className="content-center flex-between">
          <div className="header-logo center-vert">
            <Link className="serif drop-three" to="/">Once Upon a Table</Link>
          </div>
          <div className="header-nav flex-between">
              <GamesTab userId={userId}/>
              <UserTab userId={userId}
                       userName={userName}
                       logout={logout}
                       login={login}/>
           </div>
        </section>
      </header>
    );
  }
}

export default Header;
