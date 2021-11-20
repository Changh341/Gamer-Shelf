import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getShelves, addShelf } from "../../store/shelf";
import Game from "../Game";


const AllGames = ({ selectedShelf }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/users/${sessionUser.id}/games/all`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
        setRefresh(false)
      });
  }, [selectedShelf, refresh]);

  console.log(items)
  return (
    <>
      <table id='game-table'>
        <tr>
          <th></th>
          <th>Game Name</th>
          <th>Status</th>
          <th>Hours</th>
          <th>Avg Rating</th>
          <th>Review</th>
          <th></th>
        </tr>
        {!isLoaded ? 'Loading...' : items?.map((game) => {
          return (
            <Game game={game} setRefresh={setRefresh} />
          )
        })}
      </table>
    </>
  )
}

export default AllGames