import React from 'react';
import PlayerLink from './player_link';
import { Link } from 'react-router';

class GameDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    let { gameDetail, currentUser, enlist } = this.props;
    return (
      <section className="content-center">
        <section className="game-detail-main">
          <section className="flex-between">
            <div className="game-detail-img">
              <img src="http://www.pacinno.eu/wp-content/uploads/2014/05/placeholder-Copy-1024x769.png"/>
            </div>
            <div className="game-detail-body">
              <h1>{gameDetail.title}</h1>
              <div className="table-wrap">
                <table>
                  <tbody>
                    <tr><th>GM: </th><td><Link to={`/users/${gameDetail.gm.id}`}>
                      {gameDetail.gm.username}
                    </Link></td></tr>
                    <tr><th>System: </th><td>{gameDetail.system}</td></tr>
                    <tr><th>Active: </th><td>{gameDetail.active ? "Yes" : "No"}</td></tr>
                    <tr><th>Description: </th><td>{gameDetail.description}</td></tr>
                    <tr>
                      <th>Players: </th>
                      <td>
                        {Object.keys(gameDetail.players).length}/{gameDetail.max_players}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="game-detail-players">
                <ul>
                  {Object.values(gameDetail.players).map(
                    (player) => <PlayerLink key={player.id} player={player}/>
                  )}
                  {currentUser ?  (
                    <li>
                      <a onClick={enlist(gameDetail.id, currentUser.id)}
                         href="javascript.void()">
                        <img className="plus" alt="plus button"/>
                      </a>
                    </li>
                  ) : ""}
                </ul>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default GameDetail;
