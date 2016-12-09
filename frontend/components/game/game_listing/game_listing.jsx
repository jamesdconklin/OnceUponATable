import React from 'react';
import Modal from 'react-modal';
import PlayerLink from './player_link';
import { Link } from 'react-router';
import UserSignupContainer from 'UserSignupContainer';
import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';

class GameListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this._openModal = this._openModal.bind(this);
    this._onModalClose = this._onModalClose.bind(this);
  }

  _onModalClose() {
    this.setState({modalOpen: false});
  }

  _openModal() {
    this.setState({modalOpen: true});
  }

  _onModalOpen() {
  }

  _userLinks(game, user) {
    let edit, play;

    if (!user) {
      return "";
    }

    if (user.id === game.gm.id) {
      edit = (
        <Link className="button" to={`/games/${game.id}/edit`}>
          Edit Game
        </Link>
      );
    } else {
      edit = "";
    }

    if (game.players.map(p => p.id)
      .concat(game.gm.id).
        indexOf(user.id) >= 0) {
      play = (
        <Link className="button" to={`/canvas/${game.id}`}>
          Join Game
        </Link>
      );
    } else {
      play = "";
    }

    return (
      <div className="flex-around">
        {edit}
        <br/>
        {play}
      </div>
    );
  }

  render() {
    cloudinaryConfig({ cloud_name: window.cloudName });
    let { gameListing, currentUser, enlist, deEnlist } = this.props;
    return (
      <section className="content center-horiz">
        <section className="content-center">
          <section className="game-detail-main">
            <Modal isOpen={this.state.modalOpen}
                   onRequestClose={this._onModalClose}
                   onAfterOpen={this._onModalOpen}
                   className="user-signup">
              <UserSignupContainer onModalClose={this._onModalClose}/>
            </Modal>
            <section className="flex-between">
              <div className="game-detail-img">
                <CloudinaryImage publicId={gameListing.image_url}
                                 options={{quality: 30, width: 480, crop: "scale"}}/>
                {this._userLinks(gameListing, currentUser)}
              </div>
              <div className="game-detail-body">
                <h1 className="serif drop-two">{gameListing.title}</h1>
                <div className="table-wrap">
                  <table>
                    <tbody>
                      <tr><th>GM: </th><td><Link to={`/users/${gameListing.gm.id}`}>
                        {gameListing.gm.username}
                      </Link></td></tr>
                      <tr><th>System: </th><td>{gameListing.system}</td></tr>
                      <tr><th>Active: </th><td>{gameListing.active ? "Yes" : "No"}</td></tr>
                      <tr><th>Description: </th><td>
                        {gameListing.description.split(/\n|\r|\r\n/).map(
                          (p,i) => <p key={i}>{p}</p>
                        )}
                      </td></tr>
                      <tr>
                        <th>Players: </th>
                        <td>
                          {Object.keys(gameListing.players).length}/{gameListing.max_players || "--"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="game-detail-players">
                  <ul>
                    {Object.keys(gameListing.players).map(
                      (key) => {
                        let player = gameListing.players[key];
                        return (
                          <PlayerLink key={player.id} player={player}
                            gmId={gameListing.gm.id} userId={currentUser && currentUser.id}
                            deEnlist={deEnlist(gameListing.id, player.id)}/>
                        );
                      }
                    )}
                    {(currentUser && (currentUser.id === gameListing.gm.id ||
                      gameListing.players.map(p=>p.id).
                        indexOf(currentUser.id) < 0
                      )) ? (
                      <li key="plus">
                        <div className="player-link">
                          <a onClick={ (e) => {
                              e.preventDefault();
                              if (gameListing.gm.id === currentUser.id) {
                                this._openModal();
                              } else {
                                enlist(gameListing.id, currentUser.id)(e);
                              }
                            }
                          }
                             href="javascript.void()">
                            <div className="icon" title="Add Players">
                              <div>
                                <span>+</span>
                              </div>
                            </div>
                          </a>
                      </div>
                      </li>
                    ) : ""}
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default GameListing;
