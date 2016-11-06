import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        changed: {},
        errors: []
    };

    if (props.routeParams.game_id) {
      this.state.id = props.routeParams.game_id;
    }

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

  // componentWillReceiveProps(nextProps) {
  //   console.log('CWRP');
  //   console.log(nextProps);
  //   console.log(this.props);
  //   if (this.props.edit) {
  //     console.log(this.props);
  //     this.setState(this.props.gameDetail);
  //   }
  // }

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
    console.log("STATE", this.state);
    console.log("PROPS", this.props);
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
                     value={this.state.title || (!this.state.changed.title && edit && gameDetail.title) || "" }/>
              <br/>
              <input type="text" id="system" placeholder="System: "
                     value={this.state.system || (!this.state.changed.system && edit && gameDetail.system) || "" }/>
              <br/>
              <textarea id="description" placeholder="Description: "
                        value={this.state.description || (edit && !this.state.changed.description && gameDetail.description) || ""}/>

              <br/>
              <label>Max Players:
                <input type="number" id="max_players" min="0"
                       value={this.state.max_players ||
                                     (edit && !this.state.changed.max_players && gameDetail.max_players)}/>
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
