import React from 'react';
import { Link } from 'react-router';

class GamesTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
    $(window).click((e) => this.setState({dropDown: false}));
  }

  render() {
    let { userId } = this.props;
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
          <a className="header-link">Games</a>
          <ul className={`nav-dropdown ${dropDownHidden}`}>
            <li>
              <Link to={`/users/${userId}`}>My Games</Link>
            </li>
            <li>
              <Link to="/games/new">New Game</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      ret = (
        <div className="center-vert user-tab">
          <Link className="header-link"
                to="/signup">Sign Up</Link>
              <div className="nav-dropDown hidden"/>
        </div>
      );
    }
    return ret;
  }
}

export default GamesTab;
