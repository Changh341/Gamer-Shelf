import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import './User.css'

const User = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

  };
  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div id='user-info-logout-div'>
      <div>
        <li>Email: {sessionUser.email}</li>
        <li>Username: {sessionUser.username}</li>
        <li><button onClick={(event) => { logout(event) }}>Logout</button></li>
      </div>
    </div>
  )
}

export default User