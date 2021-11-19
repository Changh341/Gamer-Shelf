import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { csrfFetch } from "../../store/csrf";
import './game.css'

const Game = ({ game, setRefresh }) => {
  const userShelves = useSelector((state) => state.shelf)
  let shelfIds = Object.keys(userShelves)


  const [shelfChange, setShelfChange] = useState(false)

  useEffect(() => {
    if (!shelfChange) return;

    const closeMenu = () => {
      setShelfChange(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [shelfChange]);

  const changingShelf = async (id) => {
    const payload = {
      status: game.status,
      shelfId: id,
      hoursProgressed: game.hoursProgressed
    }
    const response = await csrfFetch(`/api/shelves/${game.shelfId}/games/${game.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      setRefresh(true)
    }
  }


  const handleRemove = async () => {
    const response = await csrfFetch(`/api/shelves/${game.shelfId}/games/${game.id}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      setRefresh(true)
    }
  }
  const currentShelf = (id) => {
    if (id == game.shelfId) {
      return true
    } else {
      return false
    }
  }

  return (
    <tr>
      <td>{game.name}</td>
      <td>{game.status}</td>
      <td>{game.hoursProgressed}</td>
      <td>3.2</td>
      <td></td>
      <button className='smaller-button' onClick={(event) => { setShelfChange(true) }}>[reshelf] {shelfChange && (
        <div onChange={(event) => { changingShelf(event.target.value) }} className="profile-dropdown">
          {shelfIds.map((shelfId) => {
            return (
              <div>
                <input type="radio" value={shelfId} name={`game${game.id}`} checked={currentShelf(shelfId)} /><span className='radio-label'>{userShelves[shelfId].shelfName}</span>
              </div>
            )
          })}
        </div>
      )
      }</button>
      <button className='x-button' onClick={(event) => { handleRemove() }}>x</button>
    </tr>
  )
}

export default Game