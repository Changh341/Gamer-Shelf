import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getShelves, addShelf } from "../../store/shelf";
import Game from "../Game";

const ShelfViewer = ({ selectedShelf }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/shelves/${selectedShelf}/games`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
        setRefresh(false)
      });
  }, [selectedShelf, refresh]);
  return (
    <>
      {!isLoaded ? 'Loading...' : items.map((game) => {
        return (
          <Game game={game} setRefresh={setRefresh} />
        )
      })}
    </>
  )
}

export default ShelfViewer