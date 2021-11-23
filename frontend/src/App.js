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
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
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
      <Footer setShowModal={setShowModal} />

      {
        showModal && <Modal type='aboutMe' onClose={() => setShowModal(false)}>
          <AboutMe />
        </Modal>
      }
    </>
  );
}

export default App;
