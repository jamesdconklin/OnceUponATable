import React from 'react';
import { Link } from 'react-router';

class GameIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: "left"
    };
  }

  render() {
    let {game} = this.props;
    let ret =  (
      <li>
        <div className="game-index-item">
          <div className="game-index-item-header flex-between">
            <Link to={`/games/${game.id}`}>{game.title}</Link>
            <div>Foo</div>
          </div>
          <div className="game-index-item-body">
            <div className={`game-index-item-description collapse-${this.state.collapse}`}>
              "{game.description.length > 220 ? game.description.slice(0,217).concat("...") : game.description}"
            </div>
            <div className={`game-index-item-divider collapse-${this.state.collapse}`}
              onClick={(e) => {
                this.setState(
                  {collapse: this.state.collapse === "left" ? "right" : "left"}
                );
              }}>
            </div>
            <div className={`game-index-item-details collapse-${this.state.collapse}`}>
              GM: <Link to={`/users/${game.gm.id}`}>{game.gm.username}</Link>
            <br/>
            System: {game.system}
            <br/>
            Players: {game.num_players}/{game.max_players || "--"}
          </div>
          </div>
        </div>
      </li>
    );
    return ret;
  }
}

export default GameIndexItem;
