import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import GameIndex from '../game/game_index';

class User extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { userName, userId, run, played } = this.props;
    return (
      <section className="content-center">
        <section className="user-main">
          <section className="flex-between">
            <GameIndex games={this.props.run} type="GM'd"/>
            <GameIndex games={this.props.played} type="Played"/>
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(User);