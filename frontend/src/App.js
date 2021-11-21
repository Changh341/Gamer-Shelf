import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from "./components/LoginFormPage";
import HomePage from './components/HomePage'
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import GameBrowser from './components/GameBrowser';
import User from './components/User';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div id='whole'>
        <Navigation isLoaded={isLoaded} />
        <div id='wrapped'>
          {isLoaded && (
            <Switch>
              <Route path='/signup'>
                <SignupFormPage />
              </Route>
              <Route path='/login'>
                <LoginFormPage />
              </Route>
              <Route path='/' exact={true}>
                <HomePage />
              </Route>
              <Route path='/browsegames'>
                <GameBrowser />
              </Route>
              <Route path='/user/page'>
                <User />
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
