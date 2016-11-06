import React from 'react';
import { hashHistory } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class UserTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
    $(window).click((e) => this.setState({dropDown: false}));
  }

  render() {
    let {userId, userName, logout, login} = this.props;

    let ret;
    if (userId) {
      let dropDownHidden = this.state.dropDown ? "showing" : "hidden";
      let toggleDropDown = (e) => {
        e.stopPropagation();
        this.setState({dropDown: this.state.dropDown ^ true});
      };
      ret = (
        <div className={`center-vert user-tab ${dropDownHidden}`}
             onClick={toggleDropDown}>
          <a className="header-link">
            {userName}
          </a>
          <ul className={`nav-dropdown ${dropDownHidden}`}>
            <li onClick={(e) => hashHistory.push(`/users/${userId}`)}>
              <a>User Page</a>
            </li>
            <li onClick={logout}>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      );
    } else {
      ret = (
        <div className="center-vert user-tab" onClick={()=>hashHistory.push("/login")} >
          <a className="header-link">Log In</a>
          <div className="nav-dropdown hidden">"HoverBar"</div>
        </div>
      );
    }
    return ret;
  }
}

export default UserTab;
