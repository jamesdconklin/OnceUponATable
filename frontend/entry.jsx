import React from 'react';
import ReactDom from 'react-dom';
import * as session_api from './util/session_api_util';
import * as game_api from './util/game_api_util';
import * as user_api from './util/user_api_util';
import * as canvas_api from './util/canvas_api_util';
import * as asset_api from './util/asset_api_util';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';


document.addEventListener("DOMContentLoaded",
  () => {
    let preloadedState = {
      session: {
        currentUser: window.currentUser || null,
        errors: []
      }
    };
    let store = configureStore(preloadedState);
    const root = document.getElementById("root");
    window.store = store;
    window.session_api = session_api;
    window.game_api = game_api;
    window.user_api = user_api;
    window.canvas_api = canvas_api;
    window.asset_api = asset_api;
    $.cloudinary.config({
      cloud_name: window.cloudName,
      api_key: window.cloudinaryKey
    });
    Modal.setAppElement(document.body);
    ReactDom.render(<Root store={store}/>, root);
  }
);
