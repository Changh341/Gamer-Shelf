import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import ShelfContainer from "../ShelfContainer";
import ShelfViewer from "../ShelfViewer";
import "./HomePage.css"
import AllGames from "../AllGames";

const HomePage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
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