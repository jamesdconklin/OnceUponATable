import React from 'react';

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this._clearSelected = this._clearSelected.bind(this);
    this._renderAsset = this._renderAsset.bind(this);
  }

  _clearSelected(e) {
    console.log("PREV SELECTED: ",this.props.selected);
    if (this.props.selected) {
      console.log("CLEAR SELECTED");
      this.props.setSelected(null);
    }
  }

  componentDidMount() {
    this.props.fetchAssets();
    window.addEventListener("mouseup", this._clearSelected);
    window.addEventListener("mousedown", this._clearSelected);
    window.addEventListener("click", this._clearSelected);
  }

  _renderAsset(asset) {
    return (
      <li key={asset.title}
          onMouseDown={(e) => {
            e.stopPropagation();
            console.log("Clicked asset is ", asset);
            this.props.setSelected(asset);
            console.log("Resulting selected is", this.props.selected);
          }
        }>
        <a>{asset.title}</a>
      </li>
    );
  }

  render() {
    return (
      <div className="canvas-toolbar">
        <ul>
          {this.props.assets.map(this._renderAsset)}
        </ul>
      </div>
    );
  }
}

export default Assets;
