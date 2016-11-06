import React from 'react';
import Modal from 'react-modal';
import { fetchUsers } from '../../util/user_api_util';

class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryResults: [],
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    console.log("tap");
    let t = e.target;
    this.setState({query: t.value});
    fetchUsers(t.value)(users => this.setState({queryResults: users}));
  }

  _userEntry(player) {
    if (this.props.players.map(p=>p.id).indexOf(player.id) >= 0) {
      return "";
    }
    return (
      <li key={player.id}
          onClick={this.props.signup(this.props.game_id, player.id)}>
        <img className="icon small" src={player.image_url}
             alt={`${player.username}'s icon'`}/>
           {player.username}
      </li>
    );

  }

  render() {
    console.log(this.state.queryResults.length > 0 && this.state.queryResults[0]);
    return (
      <div>
        <div className="icon small" onClick={this.props.onModalClose}>
          X
        </div>

        <h2>Search For Users to Add</h2>
          <input type="text" id="query" placeholder="Add User: "
                 onChange={this._handleChange}/>
        <ul>
          {this.state.queryResults.map(
            p => this._userEntry(p)
          )}
        </ul>
      </div>
    );
  }
}

export default UserSignup;
