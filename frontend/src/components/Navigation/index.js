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
      <div id='navbar-div'>
        <img id='logo' src='https://i.imgur.com/86TBwiD.png'></img>
        <div id='navbar-btn-div'>
          <NavLink activeClassName='navbar-btns-active' className='navbar-btns' exact={true} to='/'>My Shelf</NavLink>
          <NavLink activeClassName='navbar-btns-active' className='navbar-btns' to='/browsegames'>Browse Games</NavLink>
          <NavLink activeClassName='navbar-btns-active' className='navbar-btns' to='/user/page'>User</NavLink>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <>
      </>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>


  );
}

export default Navigation;