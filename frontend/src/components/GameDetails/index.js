import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { addAGame } from "../../store/game";
import './GameDetails.css'

const GameDetail = ({ game }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userShelves = useSelector((state) => state.shelf)
  const games = useSelector((state) => state.game)
  const [showAddGame, setShowAddGame] = useState(false)
  const [selectShelf, setSelectShelf] = useState(false)
  let shelfIds = Object.keys(userShelves)


  const addGame = (shelfId) => {
    if (shelfId) {

      const payload = {
        user: sessionUser.id,
        name: game.name,
        shelfId,
      }
      dispatch(addAGame(payload))
      setShowAddGame(false)
    }
  }

  const buttonSelectForm = (id) => {
    return (
      <div className='add-shelf-select'>
        <select className='navbar-btns' value={selectShelf} onChange={(event) => { setSelectShelf(event.target.value) }}>
          {shelfIds.map((shelfId) => {
            return (
              <>
                <option value={shelfId} >{userShelves[shelfId].shelfName}</option>
              </>
            )
          })}
        </select>
        <button className='navbar-btns' onClick={(event) => { addGame(id) }}>Add to Shelf</button>
      </div>

    )
  }

  return (
    <div>
      <div className='top-half-details'>
        <div><img className='detail-cover-art' src={`${game.imageURL}`}></img></div>
        <div className='title-context-div'>
          <h2>
            {game.name}
          </h2>
          {game.context}
        </div>
      </div>
      <div className='bottom-half-details'>
        <div className='extra-details-div'>
          <li className='detail-names'>
            Category: <span className='listed-details'>{game.category}</span>
          </li>
          <li className='detail-names'>
            Developer: <span className='listed-details'>{game.developers}</span>
          </li>
          <li className='detail-names'>
            Release: <span className='listed-details'>{game.release}</span>
          </li>
          <div>
            {games[game.name] ? <span className='detail-names'>On shelf: <span className='detail-shelfname'>{games[game.name].Shelf.shelfName}</span></span> : buttonSelectForm(selectShelf)}
          </div>
        </div>
        <div className='reviews-div'>
          Reviews
        </div>
      </div>
    </div>
  )
}

export default GameDetail