import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import UserContainer from './user/user_container';
import GameDetailContainer from './game/game_detail_container';
import { requestGameDetail } from '../actions/game_detail_actions';
import GameFormContainer from './game/game_form_container';
import Canvas from './canvas/canvas';

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
      return false;
    }
    return true;
  };

  const _redirectIfLoggedOut = () => {
    let user = store.getState().session.currentUser;
    if (!user) {
      hashHistory.replace(`/`);
      return false;
    }
    return true;
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/canvas/:game_id" component={Canvas}/>
        <Route path="/" component={App} >
          <IndexRoute component={SplashContainer}
                      onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn}/>
          <Route path="/users/:user_id"
                 component={UserContainer}
                 onEnter={_loadGameList}/>
          <Route path="/games/new"
                 component={GameFormContainer}
                 onEnter={_redirectIfLoggedOut}/>
          <Route path="/games/:game_id">
            <IndexRoute component={GameDetailContainer}
                        onEnter={_loadGameDetail}/>
            <Route path="/games/:game_id/edit"
                   component={GameFormContainer}
                   onEnter={(params) => _redirectIfLoggedOut && _loadGameDetail(params)}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
