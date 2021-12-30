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
import UserOnly from './components/auth/Protect';
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
      {isLoaded && (
        <Switch>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <UserOnly path='/' exact={true}>
            <HomePage />
          </UserOnly>
          <UserOnly path='/browsegames'>
            <GameBrowser />
          </UserOnly>
          <UserOnly path='/user/page'>
            <User />
          </UserOnly>
        </Switch>
      )}
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
