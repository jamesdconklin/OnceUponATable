import React from 'react';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

import GamesTab from './games_tab';
import UserTab from './user_tab';

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
            Once Upon a Table
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
