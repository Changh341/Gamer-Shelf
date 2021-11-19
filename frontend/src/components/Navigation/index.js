import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <img id='logo' src='https://i.imgur.com/86TBwiD.png'></img>
        <button className='navbar-btns' onClick={(event) => history.push('/myshelf')}>My Shelf</button>
        <button className='navbar-btns' onClick={(event) => history.push('/browsegames')}>Browse Games</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div id='navbar-div'>
      {isLoaded && sessionLinks}
    </div>

  );
}

export default Navigation;