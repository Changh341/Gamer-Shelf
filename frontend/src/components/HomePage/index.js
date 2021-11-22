import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import ShelfContainer from "../ShelfContainer";
import ShelfViewer from "../ShelfViewer";
import "./HomePage.css"
import AllGames from "../AllGames";
import { getUserGames } from "../../store/game";

const HomePage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const getAllGame = (userId) => {
    dispatch(getUserGames(userId))
  }

  useEffect(() => {
    if (sessionUser.id) {
      getAllGame(sessionUser.id)
    }
  }, []);


  const [selectedShelf, setSelectedShelf] = useState(null)


  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div id='shelf-view'>
      <div id='hp-lists'>
        <ShelfContainer setSelectedShelf={setSelectedShelf} />
      </div>
      <div id='hp-games'>
        {selectedShelf ? <ShelfViewer selectedShelf={selectedShelf} /> : <AllGames selectedShelf={selectedShelf} />}
      </div>
    </div>
  )
}

export default HomePage