import React from 'react';
import App from 'App';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from 'SessionFormContainer';
import SplashContainer from 'SplashContainer';
import UserContainer from 'UserContainer';
import GameListingContainer from 'GameListingContainer';
import { requestGameListing } from 'GameListingActions';
import GameFormContainer from 'GameFormContainer';
import Canvas from 'Canvas';
import PainterContainer from 'PainterContainer';
import { requestCanvas } from 'CanvasActions';

import { requestListedGames, requestListedUser } from 'GameIndexActions';


const Root = ({store}) => {
  const _loadCanvas = ({params}) => {
    store.dispatch(requestCanvas(params.game_id));
  };

  const _loadGameListing = ({params}) => {
    store.dispatch(requestGameListing(params.game_id));
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
        <Route path="/canvas/" component={Canvas}>
          <Route path="/canvas/:game_id" component={PainterContainer}
                 onEnter={(params) =>(_redirectIfLoggedOut() && _loadCanvas(params))}/>
        </Route>
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
            <IndexRoute component={GameListingContainer}
                        onEnter={_loadGameListing}/>
            <Route path="/games/:game_id/edit"
                   component={GameFormContainer}
                   onEnter={(params) => (_redirectIfLoggedOut() && _loadGameListing(params))}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
