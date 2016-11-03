import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.processForm({user});
  }

  handleChange(e) {
    if (e.target.id === "username") {
      let username = e.target.value;
      this.setState({username});
    }

    if (e.target.id === "password") {
      let password = e.target.value;
      this.setState({password});
    }
  }

  renderErrors(filter) {
    let filteredErrors = this.props.errors.filter(
      err => !filter || err.toLowerCase().match(filter.toLowerCase())
    );
    if (filteredErrors.length) {
      return (
        <ul>
          {filteredErrors.map(
            (err) => <li key={err}>{err}</li>
          )}
        </ul>
      );
    } else {
      return "";
    }
  }

  render () {
    let altType = (this.props.formType === "Log In") ? "Sign Up" : "Log In";
    let altRoute = `/${altType.toLowerCase().split(' ').join('')}`;

    return (
      <section className="content-center">
        <section className="center-horiz">
          <section className="center-vert">
            <form id="user-session-form"
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}>
              <h1>{this.props.formType}</h1>
              <input type="text" id="username" placeholder="Username: " />
              <br/>
              <input type="password" id="password" placeholder="Password: " />
              <br/>
              { this.renderErrors() }
              <button type="submit" className="button">
                {this.props.formType}
              </button>
              <button className="button"
                     onClick={this.props.demoLogin}>
                Demo Login
              </button>
            </form>
          </section>
        </section>
      </section>
    );
  }
}


export default withRouter(SessionForm);
