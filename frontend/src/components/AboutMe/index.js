import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import './AboutMe.css'

const AboutMe = () => {
  const dispatch = useDispatch()


  return (
    <div id='about-me-view'>
      <span>Hello! I am Hao Chang</span>
      <span>Feel free to connect with me via</span>
      <a href='https://www.linkedin.com/in/hao-chang-459128b1/'>LinkedIn</a>
      <a href='https://github.com/Changh341'>Github</a>
    </div>
  )
}

export default AboutMe