import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import "./Footer.css"


const Footer = ({ setShowModal }) => {
  const dispatch = useDispatch()


  return (
    <div id='footer'>
      <button id='about-me' onClick={(event) => { setShowModal(true) }}>About</button>
    </div>
  )
}

export default Footer