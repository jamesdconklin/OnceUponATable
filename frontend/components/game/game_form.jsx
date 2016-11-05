import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: 0,
        title: "",
        system: "",
        description: "",
        gm: {
          id: 0,
          username: ""
        },
        active: false,
        players: [],
        max_players: null,
        current_player: 0,
        errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  componentDidMount() {
    if (this.props.edit) {
      this.props.requestGameDetail();
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
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {

    let {edit, gameDetail, currentUser, type, processForm} = this.props;
    return (
      <section className="content-center">
        <section className="center-vert">
          <section className="center-horiz">
            <form className="game-form"
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}>
              <h1>{type}</h1>
              <input type="text" id="title" placeholder="Title: "
                     defaultValue={this.state.title || (edit && gameDetail.title) || ""}/>
              <br/>
              <input type="text" id="system" placeholder="System: "
                     defaultValue={this.state.system || (edit && gameDetail.system) || ""}/>
              <br/>
              <textarea id="description" placeholder="Description: "
                        defaultValue={this.state.description || (edit && gameDetail.description) || ""}/>

              <br/>
              <label>Max Players:
                <input type="number" id="max_players" min="0"
                       defaultValue={this.state.max_players ||
                                     (edit && gameDetail.max_players) ||
                                     0}/>
             </label>
              <br/>
              <label>Active?
                <select id="active" placeholder="Active? ">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </label>
              {this.renderErrors()}
              <button type="submit" className="button">
                {type}
              </button>
            </form>
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(GameForm);
