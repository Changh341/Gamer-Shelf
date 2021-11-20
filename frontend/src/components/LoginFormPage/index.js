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

  if (sessionUser) return <Redirect to="/myshelf" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <div id='sliding-one'>
        <SlidingPictures pictures={slidingArr1} />
      </div>
      <div id='sliding-two'>
        <SlidingPictures pictures={slidingArr2} />
      </div>
      <div id='sliding-three'>
        <SlidingPictures pictures={slidingArr3} />
      </div>
      <div id='login-page'>
        <div id='login-content'>
          <img id='logo' src='https://i.imgur.com/86TBwiD.png'></img>
          <form id='login-form' onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button id='login-btn' type="submit">Log In</button>
          </form>
          <button onClick={(event) => { history.push('/signup') }} className='smaller-button'>Don't have an account?</button>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
