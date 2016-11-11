import React from 'react';
import { merge } from 'lodash';

class Toolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({left: 0, top: 0}, props.assetParams);
    this._onChange = this._onChange.bind(this);
    this._setAttribute = this._setAttribute.bind(this);
    this._validateColor = this._validateColor.bind(this);
    this._renderDrawMenu = this._renderDrawMenu.bind(this);
  }

  _validateColor(color) {
    let pattern = /^(#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?)?$/;
    return color.match(pattern);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.assetParams);
  }

  _setAttribute(attribute, val) {
    return (e) => {
      e.preventDefault();
      this.props.sendParams({[attribute]: val});
    };
  }

  _onChange(attr) {
    return (e) => {
      let value = e.target.value;
      if (!this._validateColor(value)) {
        return;
      }
      this.props.sendParams({[attr]: value});
    };
  }

  _renderDrawMenu(draw, fill) {
    if (!draw) {
      return "";
    }
    return (
      <div>
        <div className="color-section">
          <div className="color-header">
            <div>
              Line Color
            </div>
          </div>
          <div className="color-selector"
               style={{backgroundColor: this.state.lineColor}}>
            <label>
              <input type="color" id="lineColor"
                     value={this.state.lineColor || null}
                     onChange={this._onChange("lineColor")}/>
              </label>
          </div>
        </div>
        <div className="toggle-section">
          <div className="toggle-header">
            <div>Draw Mode</div>
          </div>
          <div className="toggle-buttons">
            <button className={`toggle-left ${!fill ? "selected" : ""}`}
                    onClick={this._setAttribute('fill', false)}>
              Outline
            </button>
            <button className={`toggle-right ${fill ? "selected" : ""}`}
                    onClick={this._setAttribute('fill', true)}>
              Solid
            </button>
          </div>
        </div>

        {fill && (
          <div className="color-section">
            <div className="color-header">
              <div>
                Fill Color
              </div>
            </div>
            <div className="color-selector"
                 style={{backgroundColor: this.state.fillColor}}>
              <label>
                <input type="color" id="fillColor"
                       value={this.state.fillColor || "#f00"}
                       onChange={this._onChange("fillColor")}/>
                </label>
            </div>
          </div>

        )}
      </div>
    );
  }

  render() {
    let {setLayer, layer} = this.props;
    let { fill, draw, lineColor, fillColor } = this.state;
    return (
      <div className="toolbox">
        <form onSubmit={(e)=>{e.preventDefault();}} className="toolbox-form">
          <div className="toggle-section">
            <div className="toggle-header">
              <div>Layer</div>
            </div>
            <div className="toggle-buttons">
              <button className={`toggle-left ${layer == "map" ? "selected" : ""}`}
                onClick={(e) => this.props.setLayer("map")}>
                Map
              </button>
              <button className={`toggle-right ${layer == "token" ? "selected" : ""}`}
                onClick={(e) => this.props.setLayer("token")}>
                Token
              </button>
            </div>
          </div>
          <div className="toggle-section">
            <div className="toggle-header">
              <div>Mode</div>
            </div>
              <div className="toggle-buttons">
              <button className={`toggle-left ${!draw ? "selected" : ""}`}
                      onClick={this._setAttribute('draw', false)}>
                Select
              </button>
              <button className={`toggle-right ${draw ? "selected" : ""}`}
                      onClick={this._setAttribute('draw', true)}>
                Draw
              </button>
            </div>
          </div>
          {this._renderDrawMenu(draw, fill)}
        </form>
      </div>
    );
  }
}


export default Toolbox;
