import React from 'react';
import {cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this._clearSelected = this._clearSelected.bind(this);
    this._renderAsset = this._renderAsset.bind(this);
    this._update = this._update.bind(this);
  }

  _update(e) {
    this.setState({title: e.target.value});
    this.props.fetchAssets(e.target.value);
  }

  _clearSelected(e) {
    if (this.props.selected) {
      this.props.setSelected(null);
    }
  }

  componentDidMount() {
    this.props.fetchAssets(this.state.title);
    window.addEventListener("mouseup", this._clearSelected);
    window.addEventListener("mousedown", this._clearSelected);
    window.addEventListener("click", this._clearSelected);
  }

  _triggerMouseUp(e) {
    let event = new MouseEvent("mouseup", e);
    document.getElementById("game-canvas").dispatchEvent(event);
  }
  _renderAsset(asset) {
    return (
      <li key={asset.title}>
        <div className="asset-entry">
          <div className="asset-header">{asset.title}</div>
          <CloudinaryImage draggable="true"
                           onDragEnd={this._triggerMouseUp}
                           className="asset-image"
                           publicId={asset.image_url}
                           options={{width: 150, crop: "scale"}}
                           onMouseDown={(e) => {
                             e.stopPropagation();
                             this.props.setSelected(asset);
                           }}/>
        </div>
      </li>
    );
  }

  render() {
    cloudinaryConfig({cloud_name: window.cloudName});
    return (
      <div className="asset-toolbar">
        <div className="asset-toolbar-header">
          <input type="text" placeholder="Search Assets: "
                 onChange={this._update}/>
        </div>
        <ul className="asset-library">
          {this.props.assets.map(this._renderAsset)}
        </ul>
      </div>
    );
  }
}

export default Assets;
