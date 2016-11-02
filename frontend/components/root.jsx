import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = ({store}) => {

  const _redirectIfLoggedIn = () => {
    if (store.getState().session.currentUser) {
      hashHistory.replace("/");
    } 
  };
  return (
   <Provider store={store}>
     <MuiThemeProvider>
       <Router history={hashHistory}>
         <Route path="/" component={App} >
           <Route path="/login" component={SessionFormContainer}
                  onEnter={_redirectIfLoggedIn}/>
           <Route path="/signup" component={SessionFormContainer}
                  onEnter={_redirectIfLoggedIn}/>
         </Route>
       </Router>
     </MuiThemeProvider>
   </Provider>
  );
};

export default Root;
