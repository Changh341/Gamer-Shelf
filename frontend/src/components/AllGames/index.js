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

  return (
    <>
      <table id='game-table'>
        <thead>

          <tr>
            <th></th>
            <th>Game Name</th>
            <th>Status</th>
            <th>Hours</th>
            <th>Avg Rating</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!isLoaded ? <tr><td>'Loading...'</td></tr> : items?.map((game) => {
            return (
              <Game key={`${game.name}`} game={game} setRefresh={setRefresh} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default AllGames