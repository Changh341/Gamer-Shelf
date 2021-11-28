import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { addAReview, destroyAReview, editAReview } from "../../store/game";
import './ReviewEditSubmit.css'


const ReviewEditSubmit = ({ game, setShowModal }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userGames = useSelector((state) => state.game)
  const [rating, setRating] = useState(5.0)
  const [context, setContext] = useState('')
  const [error, setError] = useState(false)
  const validCharacters = /[a-z]+|[A-Z]+|[0-9]/;

  const handleSubmit = (event, type) => {
    event.preventDefault()
    if (context.length < 126) {
      if (context.match(validCharacters) && context.length) {

        if (type === 'POST') {
          const payload = {
            content: context,
            rating,
            gameId: userGames[game.name].id
          }
          dispatch(addAReview(payload))
        }
        if (type === 'EDIT') {
          const payload = {
            content: context,
            rating,
            reviewId: userGames[game.name].Review.id,
            gameId: userGames[game.name].id
          }
          dispatch(editAReview(payload))
        }
        setShowModal(false)
      } else {
        setError(true)
      }
    }
  }

  const handleDelete = () => {
    const payload = {
      reviewId: userGames[game.name].Review.id,
      gameId: userGames[game.name].id
    }
    dispatch(destroyAReview(payload))
    setShowModal(false)
  }

  useEffect(() => {
    if (userGames[game.name].Review) {
      setContext(userGames[game.name].Review.content)
      setRating(userGames[game.name].Review.rating)
    }
  }, [])

  const checkLength = () => {
    if (context.length < 126) {
      return (
        <span id='character-count'>
          {context.length}/125 Character Count
        </span>
      )
    } else {
      return (
        <span id='character-count-over'>
          {context.length}/125 Character Count
        </span>
      )
    }
  }

  return (
    <div className='review-post-edit-container'>
      <span className='game-title-review'>{game.name}</span>
      <h4 className='header-review'>Your review {userGames[game.name].Review ? <button className='x-button' onClick={(event) => { handleDelete() }}>x</button> : null}</h4>

      <form className='review-form'>
        <textarea className='text-area-review' value={context} onChange={(event) => { setContext(event.target.value) }} />
        <div className='review-bottom-container'>
          <select className='review-select' value={rating} onChange={(event) => { setRating(event.target.value) }}>
            <option>5.0</option>
            <option>4.0</option>
            <option>3.0</option>
            <option>2.0</option>
            <option>1.0</option>
          </select>
          {userGames[game.name].Review ? <button id='edit-review' className='offcolor-buttons' onClick={(event) => { handleSubmit(event, 'EDIT') }}>Edit</button> : <button id='post-review' className='offcolor-buttons' onClick={(event) => { handleSubmit(event, 'POST') }}>Post</button>}
        </div>
      </form>
      {checkLength()}
      {error ? <span className='errors'>Cant be empty</span> : null}
    </div>
  )
}

export default ReviewEditSubmit