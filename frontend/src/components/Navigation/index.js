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
        <NavLink activeClassName='navbar-btns-active' className='navbar-btns' to='/myshelf'>My Shelf</NavLink>
        <NavLink activeClassName='navbar-btns-active' className='navbar-btns' to='/browsegames'>Browse Games</NavLink>
        <NavLink activeClassName='navbar-btns-active' className='navbar-btns' to='/user/page'>User</NavLink>
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