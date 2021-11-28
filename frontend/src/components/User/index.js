import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import './User.css'

const User = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const [items, setItems] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

  };

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/users/${sessionUser.id}/profile`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, []);




  const gamesHour = () => {
    let hours = 0
    items.map((game) => hours += Number(game.hoursProgressed))
    return (
      <span>{hours} hours</span>
    )
  }

  const gamesCompleted = () => {
    let completed = 0
    items.map((game) => {
      if (game.status === 'Completed') {
        completed += 1
      }
    })
    return (
      <span>{completed}</span>
    )
  }

  const gamesOwned = () => {
    let owned = 0
    items.map((game) => {
      if (game.status !== 'Interested') {
        owned += 1
      }
    })
    return (
      <span>{owned}</span>
    )
  }

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div id='user-info-logout-div'>
      <div id='user-info-div'>
        <div>
          <li>Email: <span className='user-info'>{sessionUser.email}</span></li>
          <li>Username: <span className='user-info'>{sessionUser.username}</span></li>
          <li><button className='offcolor-buttons' onClick={(event) => { logout(event) }}>Logout</button></li>
        </div>
      </div>
      <div id='stats-div'>
        <div>
          <li>Games completed: {isLoaded ? gamesCompleted() : <span>Loading...</span>}</li>
          <li>Number of hours logged: {isLoaded ? gamesHour() : <span>Loading..</span>} </li>
          <li>Number of games owned: {isLoaded ? gamesOwned() : <span>Loading..</span>} </li>
        </div>
      </div>
    </div>
  )
}

export default User