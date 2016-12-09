import React from 'react';
import ReactDom from 'react-dom';
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

    $.cloudinary.config({
      cloud_name: window.cloudName,
      api_key: window.cloudinaryKey
    });
    Modal.setAppElement(document.body);
    ReactDom.render(<Root store={store}/>, root);
  }
);
