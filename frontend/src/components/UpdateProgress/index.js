import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import { updateAGame } from "../../store/game";
import './UpdateProgress.css'

const UpdateProgress = ({ game, setShowModal, setGameStatus, setGameProgress }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const [status, setStatus] = useState('')
  const [hoursProgressed, setHoursProgressed] = useState('')

  useEffect(() => {
    setStatus(game.status)
    setHoursProgressed(game.hoursProgressed)
  }, [])

  const handleUpdate = async (event, gameId) => {
    event.preventDefault()
    const payload = { status, hoursProgressed, gameId }
    await dispatch(updateAGame(payload))
    setGameStatus(status)
    setGameProgress(hoursProgressed)
    setShowModal(false)
  }


  return (
    <div id='update-progress-container'>
      <span id='update-progress-header'>{game.name}</span>
      <form id='update-progress-form'>
        <div className='update-input-div'>
          <label className='label'>
            Status
            &nbsp;
            <select onChange={(event) => { setStatus(event.target.value) }} value={status}>
              <option value='Not Purchased'>Not Purchased</option>
              <option value='Owned'>Owned</option>
              <option value='Stopped'>Stopped</option>
              <option value='Playing'>Playing</option>
              <option value='Completed'>Completed</option>
            </select>
          </label>
        </div>
        <div className='update-input-div'>
          <label className='label'>
            Hours
            &nbsp;
            <input id='hours-input' required onChange={(event) => { setHoursProgressed(event.target.value) }} type='number' value={hoursProgressed}></input>
          </label>
        </div>
        <div className='update-input-div'>
          <button className='navbar-btns' onClick={(event) => { handleUpdate(event, game.id) }}>Update</button>
        </div>
      </form>
    </div >
  )
}

export default UpdateProgress