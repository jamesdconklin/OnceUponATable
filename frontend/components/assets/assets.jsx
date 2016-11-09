import React from 'react';
import {cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this._clearSelected = this._clearSelected.bind(this);
    this._renderAsset = this._renderAsset.bind(this);
  }

  _clearSelected(e) {
    if (this.props.selected) {
      this.props.setSelected(null);
    }
  }

  componentDidMount() {
    this.props.fetchAssets();
    window.addEventListener("mouseup", this._clearSelected);
    window.addEventListener("mousedown", this._clearSelected);
    window.addEventListener("click", this._clearSelected);
  }

  _triggerMouseUp(e) {
    let event = new MouseEvent("mouseup", e);
    //   view: window,
    //   bubbles: true,
    //   cancelable: true
    // });
    document.getElementById("game-canvas").dispatchEvent(event);
  }
  _renderAsset(asset) {
    return (
      <li key={asset.title}>
        <div>

          <CloudinaryImage title={asset.title}
                           draggable="true"
                           onDragEnd={this._triggerMouseUp}
                           className="asset-entry"
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
      <div className="canvas-toolbar">
        <ul className="asset-library">
          {this.props.assets.map(this._renderAsset)}
        </ul>
      </div>
    );
  }
}

export default Assets;
