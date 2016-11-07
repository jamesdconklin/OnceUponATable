import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

const _defaultState = {
    id: 0,
    title: "",
    system: "",
    description: "",
    gm: {
      id: 0,
      username: ""
    },
    // active: true,
    players: [],
    max_players: null,
    current_player: 0,
    errors: [],
    changed: {}
  };

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _defaultState;

    if (props.routeParams.game_id) {
      this.state.id = props.routeParams.game_id;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  componentDidMount() {
    if (this.props.edit) {
      // this.props.requestGameDetail();
      this.props.setInitialState.bind(this)();
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map(
          (error) => <li key={error}>{error}</li>
        )}
      </ul>
    );
  }

  handleChange(e) {
    e.preventDefault();
    let targ = e.target;
    let field = targ.id;
    let value = targ.value;
    this.setState({
      [field]: value,
      changed: merge(this.state.changed, {[field]: true})
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    let {edit, gameDetail, currentUser, type, processForm} = this.props;
    return (
      <section className="content center-horiz">
        <section className="content-center">
          <section className="center-vert">
            <section className="center-horiz">
              <form className="game-form"
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}>
                <div className="form-header">
                  <h1>{type}</h1>
                </div>
                <div className="form-body">
                  <input type="text" id="title" placeholder="Title: " autoFocus
                         value={this.state.title || (!this.state.changed.title && edit && gameDetail.title) || "" }/>
                  <br/>
                  <input type="text" id="system" placeholder="System: "
                         value={this.state.system || (!this.state.changed.system && edit && gameDetail.system) || "" }/>
                  <br/>
                  <input type="text" id="max_players" placeholder="Number of Players: "
                    value={this.state.max_players ||
                      (edit && !this.state.changed.max_players && gameDetail.max_players) || ""}/>
                    <br/>
                  <textarea id="description" placeholder="Description: "
                            value={this.state.description || (edit && !this.state.changed.description && gameDetail.description) || ""}/>

                  <br/>
                  {this.renderErrors()}
                  <button type="submit" className="button">
                    {type}
                  </button>
                </div>
              </form>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(GameForm);


// <label>Active?
//   <select id="active" placeholder="Active? ">
//     <option value="true">True</option>
//     <option value="false">False</option>
//   </select>
// </label>
