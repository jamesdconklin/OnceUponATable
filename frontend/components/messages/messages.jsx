/*globals Pusher*/

import ReactDOM from 'react-dom';
import React from 'react';
import { withRouter } from 'react-router';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this._renderMessage = this._renderMessage.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderMessage(message) {
    return (
      <li key={message.id} className="message">
        {this._parseMessage(message)}
      </li>
    );
  }

  _handleChange(e) {
    this.setState({body: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.body.match(/^\s*$/)) {
      this.props.postMessage(this.props.params.game_id, this.state.body);
      document.getElementById("chat-field").value = "";
      this.setState({body: ""});
    }
  }

  componentDidUpdate() {
    let history = ReactDOM.findDOMNode(this.refs.message_scroll);
    history.scrollTop = history.scrollHeight;
  }

  _parseMessage(message) {
    let parsedMsg;
    if (message.result) {
      let rolls = message.body.split(/\s+/).slice(1);
      let results = JSON.parse(message.result);
      parsedMsg = `${message.player} rolled`;
      // parsedMsg = `<i><b>${message.player}</b> rolled`;
      let comma = (rolls.length >= 3) ? "," : "";
      let cap = (rolls.length >= 2) ? ` and ${results.pop()} on ${rolls.pop()}` : "";
      parsedMsg += ` ${results.shift()} on ${rolls.shift()}`;
      while (rolls.length) {
        parsedMsg += `${comma} ${results.shift()} on ${rolls.shift()}`;
      }
      parsedMsg += cap;
      return parsedMsg;
    }
    return `${message.player} said: ${message.body}`;
  }



  componentDidMount() {
    this.props.requestMessages(this.props.params.game_id);
    var pusher = new Pusher(window.pusherApiKey);
    var channel = pusher.subscribe(`chat_${this.props.params.game_id}`);
    channel.bind(
      'new_message',
      (data) => {
        this.props.receiveMessage(data);
      }
    );
    // let history = ReactDOM.findDOMNode(this.refs.message_scroll);
    // history.scrollTop = history.scrollHeight;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.game_id !== nextProps.params.game_id) {
      nextProps.requestMessages(nextProps.params.game_id);
    }
  }

  render() {
    return (
      <div className="messages-bar">
        <div className="messages" ref="message_scroll">
          <ul className="message-list">
            {this.props.messages.map(this._renderMessage)}
          </ul>
        </div>
        <form onSubmit={this._handleSubmit}>
          <input id="chat-field" className="message-input" type="text"
            placeholder="Speak or /roll" autoComplete="off"
            onChange={this._handleChange}/>
        </form>
      </div>
    );
  }
}

export default withRouter(Messages);
