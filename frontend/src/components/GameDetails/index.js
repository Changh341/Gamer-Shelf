import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import { Modal } from "../../context/Modal";
import { addAGame } from "../../store/game";

const GameDetail = ({ game }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userShelves = useSelector((state) => state.shelf)
  const games = useSelector((state) => state.game)
  const [showAddGame, setShowAddGame] = useState(false)
  let shelfIds = Object.keys(userShelves)


  const addGame = (shelfId) => {
    const payload = {
      user: sessionUser.id,
      name: game.name,
      shelfId,
    }
    dispatch(addAGame(payload))
    setShowAddGame(false)
  }

  return (
    <div>
      {game.name}
      {game.context}
      {game.category}
      {game.developer}
      {game.release}
      {games[game.name] ? <span>On shelf {games[game.name].Shelf.shelfName}</span> :
        <button onClick={(event) => { setShowAddGame(true) }}>Add to Shelf{showAddGame && (
          <div onChange={(event) => { addGame(event.target.value) }} className="profile-dropdown">
            {shelfIds.map((shelfId) => {
              return (
                <>
                  <input type="radio" value={shelfId} name={`game${game.id}`} /><span>{userShelves[shelfId].shelfName}</span>
                </>
              )
            })}
          </div>
        )
        }</button>}
      {showAddGame && <button onClick={(event) => { setShowAddGame(false) }}>Cancel</button>}
    </div>
  )
}

export default GameDetail