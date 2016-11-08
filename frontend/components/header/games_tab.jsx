import React from 'react';
import { Link } from 'react-router';

class GamesTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
  }

  componentWillUnmount() {
    $(window).off("click");
  }

  componentDidMount() {
    $(window).click((e) => {
      let t = e.target;
      while (t && t != document && t.id !== "game-header" && t.id !== "root") {
        t = t.parentNode;
      }
      if (t.id !== "game-header") {
        this.setState({dropDown: false});
      }
    });
  }

  render() {
    let { userId } = this.props;
    let ret;
    if (userId) {
      let dropDownHidden = this.state.dropDown ? "showing" : "hidden";
      let toggleDropDown = (e) => {
        this.setState({dropDown: this.state.dropDown ^ true});
      };
      ret = (
        <div className={`center-vert user-tab ${dropDownHidden}`}
             id="game-header"
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
              <div className="nav-dropdown hidden"/>
        </div>
      );
    }
    return ret;
  }
}

export default GamesTab;
