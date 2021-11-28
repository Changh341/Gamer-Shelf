import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import './GameDetailReviews.css'
import { Modal } from "../../context/Modal";
import ReviewEditSubmit from "../ReviewEditSubmit";

const GameDetailReviews = ({ game, setAvgRate }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userGames = useSelector((state) => state.game)
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false)


  const allRating = []

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/games/${game.name}/reviews`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, [game, userGames]);

  const calcAvgRate = () => {
    if (allRating.length) {
      const sum = allRating.reduce((a, b) => a + b, 0)
      const average = parseFloat(sum / allRating.length).toFixed(2)
      setAvgRate(average)
    }
  }

  useEffect(() => {
    calcAvgRate()
  }, [allRating])

  const checkIfUser = (id) => {
    if (id === sessionUser.id) {
      return (
        <button onClick={(event) => { setShowModal(true) }} className='smaller-button'>[Edit]</button>
      )
    }
  }


  return (
    <>
      {isLoaded ? items.map((item) => {
        if (item.Review) {
          return (
            <div key={`div ${item.Review.id}`}>
              <li key={item.Review.id} className='review-container'>
                <div className='username-rating-container'>
                  <span className='username-review'>{item.Shelf.User.username}{checkIfUser(item.Shelf.User.id)}</span>
                  <div id='review-content-container'>
                    <span className='content-review'>
                      {item.Review.content}
                    </span>
                  </div>
                </div>
                <div className='rating-container'>
                  <span className='rating-review'>{allRating.push(Number(item.Review.rating)) && item.Review.rating}</span>
                </div>
              </li>
              {showModal && <Modal type='reviewModal' onClose={() => setShowModal(false)}>
                <ReviewEditSubmit game={game} setShowModal={setShowModal} />
              </Modal>}
            </div>
          )

        }
      }) : <span>Loading...</span>}
    </>
  )
}

export default GameDetailReviews