import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import UserContainer from './user/user_container';

import { requestListedGames, requestListedUser }
  from '../actions/game_list_actions';


const Root = ({store}) => {
  const _loadGameList = ({params}) => {
    console.log("LGL params", params);
    store.dispatch(requestListedUser(params.user_id));
    store.dispatch(requestListedGames("played", params.user_id));
    store.dispatch(requestListedGames("run", params.user_id));
  };

  const _redirectIfLoggedIn = () => {
    console.log("REDIRECT IF LOGGED IN");
    let user = store.getState().session.currentUser;
    if (user) {
      hashHistory.replace(`/users/${user.id}`);
    }
  };
  return (
   <Provider store={store}>
     <Router history={hashHistory}>
       <Route path="/" component={App} >
        <IndexRoute component={SplashContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/login" component={SessionFormContainer}
               onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer}
               onEnter={_redirectIfLoggedIn}/>
        <Route path="/users/:user_id"
               component={UserContainer}
               onEnter={_loadGameList}/>
       </Route>
     </Router>
   </Provider>
  );
};

export default Root;
