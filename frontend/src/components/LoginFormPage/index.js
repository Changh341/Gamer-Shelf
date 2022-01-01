import * as sessionActions from "../../store/session";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import './LoginForm.css';
import SlidingPictures from "../SlidingPictures";
import { slidingArr1, slidingArr2, slidingArr3 } from "./pictures";

function LoginFormPage({ setIsLogged }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const demoUser = () => {
    dispatch(sessionActions.demo())
  }

  return (
    <div id='login-wrap'>
      <div id='sliding-one'>
        <SlidingPictures pictures={slidingArr1} />
      </div>
      <div id='sliding-two'>
        <SlidingPictures pictures={slidingArr2} />
      </div>
      <div id='sliding-three'>
        <SlidingPictures pictures={slidingArr3} />
      </div>

      <div id='login-content'>
        <img id='logo-login' src='https://i.imgur.com/86TBwiD.png'></img>
        <form id='login-form' onSubmit={handleSubmit}>
          <ul className='error-list'>
            {errors.map((error, idx) => (
              <li className='errors' key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Username or Email
            &nbsp;
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            &nbsp;
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className='offcolor-buttons' type="submit">Log In</button>
        </form>
        <button onClick={(event) => { history.push('/signup') }} className='smaller-button'>Don't have an account?</button>
        <span>Demo Gamershelf</span>
        <button onClick={(event) => { demoUser() }} className='offcolor-buttons'>Demo Login</button>
      </div>

    </div>
  );
}

export default LoginFormPage;
