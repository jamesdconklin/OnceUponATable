import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import UserContainer from './user/user_container';
import GameDetailContainer from './game/game_detail_container';
import { requestGameDetail } from '../actions/game_detail_actions';

import { requestListedGames, requestListedUser }
  from '../actions/game_list_actions';


const Root = ({store}) => {
  const _loadGameDetail = ({params}) => {
    store.dispatch(requestGameDetail(params.game_id));
  };

  const _loadGameList = ({params}) => {
    store.dispatch(requestListedUser(params.user_id));
    store.dispatch(requestListedGames("played", params.user_id));
    store.dispatch(requestListedGames("run", params.user_id));
  };

  const _redirectIfLoggedIn = () => {
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
        <Route path="/games/:game_id"
               component={GameDetailContainer}
               onEnter={_loadGameDetail}/>
       </Route>
     </Router>
   </Provider>
  );
};

export default Root;
