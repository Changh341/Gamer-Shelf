import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import './GameDetailReviews.css'

const GameDetailReviews = ({ game, setAvgRate }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const allRating = []

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/games/${game.name}/reviews`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, [game]);

  const calcAvgRate = () => {
    if (allRating) {
      const sum = allRating.reduce((a, b) => a + b, 0)
      const average = parseFloat(sum / allRating.length).toFixed(2)
      setAvgRate(average)
    }
  }

  useEffect(() => {
    calcAvgRate()
  }, [allRating])



  return (
    <>
      {isLoaded ? items.map((item) => {
        if (item.Review) {
          return (
            <div key={`div ${item.Review.id}`}>
              <li key={item.Review.id} className='review-container'>
                <div className='username-rating-container'>
                  <span className='username-review'>{item.Shelf.User.username}</span>
                  <div className='rating-container'>
                    <span className='rating-review'>Rated {allRating.push(Number(item.Review.rating)) && item.Review.rating}</span>
                  </div>
                </div>
                <div>
                  <span className='content-review'>
                    {item.Review.content}
                  </span>
                </div>
              </li>
            </div>
          )

        }
      }) : <span>Loading...</span>}
    </>
  )
}

export default GameDetailReviews