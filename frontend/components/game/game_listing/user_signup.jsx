import React from 'react';
import Modal from 'react-modal';
import { fetchUsers } from 'UserUtil';
import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';


class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryResults: [],
      index: 0
    };
    cloudinaryConfig({ cloud_name: window.cloudName });
    this._handleChange = this._handleChange.bind(this);
  }

  _ignorePresentPlayers() {
    let {players} = this.props;

    return this.state.queryResults.filter(
      q => players.map(p => p.id).indexOf(q.id) < 0
    );
  }

  componentDidMount() {
    $(".user-signup").keydown(
      (e) => {
        let qSize = this._ignorePresentPlayers().length;
        let index = Math.max(0, Math.min(this.state.index, 6, qSize-1));

        switch (e.keyCode) {
          case 40:
            //Down
            e.preventDefault();
            e.stopPropagation();
            index = Math.min(qSize-1, 6, index+1);
            break;
          case 38:
            //Up
            e.preventDefault();
            e.stopPropagation();
            index = Math.max(0, index-1);
            break;
          case 13:
            //Enter
            e.preventDefault();
            e.stopPropagation();

            this.props.signup(this.props.game_id,
                              this._ignorePresentPlayers()[index].id)();
        }
        this.setState({index});
      }
    );
  }

  _handleChange(e) {
    let t = e.target;
    this.setState({query: t.value});
    fetchUsers(t.value)(users => this.setState({queryResults: users}));
  }

  _userEntry(player, index) {

    return (
      <li key={player.id} className={(this.state.index == index) ? "selected": ""}
          onClick={this.props.signup(this.props.game_id, player.id)}>
        <div className="center-vert">
          <CloudinaryImage className="icon small" title={`${player.name}'s icon`} publicId={player.image_url}
                             options={{quality: 10, width: 25, crop: "scale"}}/>
        </div>
        <div className="center-vert">
          <div>{player.username}</div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div id="user-signup-modal">
        <div className="icon small" onClick={this.props.onModalClose}>
          X
        </div>
        
        <div className="user-signup-header">
          <h2>Search For Users to Add</h2>
        </div>

        <div className="user-signup-body">
          <input type="text" id="query" placeholder="Add User: "
                 onChange={this._handleChange} ref="query" autoFocus/>
          <ul>
            {this._ignorePresentPlayers().map(
              (p,i) => this._userEntry(p, i)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserSignup;
