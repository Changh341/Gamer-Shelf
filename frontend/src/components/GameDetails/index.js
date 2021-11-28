import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { addAGame } from "../../store/game";
import './GameDetails.css'
import GameDetailReviews from "../GameDetailReviews";

const GameDetail = ({ game }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userShelves = useSelector((state) => state.shelf)
  const games = useSelector((state) => state.game)
  const [showAddGame, setShowAddGame] = useState(false)
  const [selectShelf, setSelectShelf] = useState(false)
  const [avgRate, setAvgRate] = useState('No Reviews')
  const [details, setDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
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
      setError(false)
    } else {
      setError(true)
    }
  }

  const buttonSelectForm = (id) => {
    return (
      <div className='add-shelf-select'>
        <select className='offcolor-buttons' value={selectShelf} onChange={(event) => { setSelectShelf(event.target.value) }}>
          <option value={''}>Select Shelf</option>
          {shelfIds.map((shelfId) => {
            return (
              <option key={`shelf ${shelfId}`} value={shelfId} >{userShelves[shelfId].shelfName}</option>
            )
          })}
        </select>
        <button className='offcolor-buttons' onClick={(event) => { addGame(id) }}>Add to Shelf</button>
      </div>

    )
  }

  useEffect(async () => {
    if (!game.context) {
      const response = await fetch(`/api/games/${game.name}`)
      if (response.ok) {
        const data = await response.json()
        setDetails(data)
        setIsLoaded(true)
      }
    } else {
      setIsLoaded(true)
    }
  }, [])

  const imageSetter = () => {
    if (isLoaded) {
      if (game.context) {
        return (
          <img className='detail-cover-art' src={game.imageURL}></img>
        )
      } else {
        return (
          <img className='detail-cover-art' src={details.imageURL}></img>
        )
      }
    } else {
      <span>LOADING IMAGE</span>
    }
  }




  return (
    <div id='game-detail-container'>
      <div className='top-half-details'>
        <div>{imageSetter()}</div>
        <div className='title-context-div'>
          <h2 id='game-title'>
            {game.name}
          </h2>
          {game.context ? game.context : details.context}
        </div>
      </div>
      <div className='bottom-half-details'>
        <div className='extra-details-div'>
          <li className='detail-names'>
            Category: <span className='listed-details'>{game.category ? game.category : details.category}</span>
          </li>
          <li className='detail-names'>
            Developer: <span className='listed-details'>{game.developers ? game.developers : details.developers}</span>
          </li>
          <li className='detail-names'>
            Metacritic: <span className='listed-details'>{game.metacritic ? game.metacritic : details.metacritic}</span>
          </li>
          <li className='detail-names'>
            Average Rating: <span className='listed-details'>{avgRate}</span>
          </li>
          <li className='detail-names'>
            Release: <span className='listed-details'>{game.release ? game.release : details.metacritic}</span>
          </li>
          <div>
            {games[game.name] ? <span className='detail-names'>On shelf: <span className='detail-shelfname'>{games[game.name].Shelf.shelfName}</span></span> : buttonSelectForm(selectShelf)}
          </div>
          <div>
            {error ? <span className='errors detail-names'>Select a valid shelf</span> : null}
          </div>
        </div>
        <div id='reviews-section'>
          <h3 id='reviews-header'>Reviews</h3>
          <div className='reviews-div'>
            <GameDetailReviews game={game} setAvgRate={setAvgRate} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetail