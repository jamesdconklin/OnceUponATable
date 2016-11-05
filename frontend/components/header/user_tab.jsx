import React from 'react';
import { hashHistory } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class UserTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      },
      dropDown: false
    };
    this.handleChange = this.handleChange.bind(this);
    $(window).click((e) => this.setState({dropDown: false}));
  }

  handleChange(key) {
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  render() {
    let {userId, userName, logout, login} = this.props;

    let ret;
    if (userId) {
      let dropdownHidden = this.state.dropDown ? "showing" : "hidden";
      let hoverBorderHidden = this.state.dropDown ?  "hidden": "showing";
      let toggleDropDown = (e) => {
        e.stopPropagation();
        this.setState({dropDown: this.state.dropDown ^ true});
      };
      ret = (
        <div className={`center-vert user-tab ${hoverBorderHidden}`}
             onClick={toggleDropDown}>
          <span >
            {userName}
          </span>
          <ul className={`nav-dropdown ${dropdownHidden}`}>
            <li onClick={(e) => hashHistory.push(`/users/${userId}`)}>
              User Page
            </li>
            <li onClick={logout}>
              Sign Out
            </li>
          </ul>
        </div>
      );
    } else {
      ret = (<div className="center-vert" onClick={()=>hashHistory.push("/login")}>
        <span>Log In</span>
      </div>);
    }
    return ret;
  }
}

export default UserTab;
