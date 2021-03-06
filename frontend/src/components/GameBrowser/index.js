import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import { getShelves } from "../../store/shelf";
import GameCard from "../GameCard";
import { getUserGames } from "../../store/game";
import './GameBrower.css'


const GameBrowser = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userGames = useSelector((state) => state.game)
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])


  const getAllGame = (userId) => {
    dispatch(getUserGames(userId))
  }

  useEffect(() => {
    dispatch(getShelves(sessionUser.id));
  }, []);

  useEffect(() => {
    findTheGame()
  }, [search])

  const gamesCount = Object.keys(userGames)


  useEffect(() => {
    if (sessionUser.id) {
      getAllGame(sessionUser.id)
    }
  }, [gamesCount.length]);


  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/games`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
        setRefresh(false)
      });
  }, []);
  if (!sessionUser) return <Redirect to="/login" />;


  const gameKeys = Object.keys(items)
  const sorted = gameKeys.sort()

  const findTheGame = () => {
    const query = search.toLowerCase()
    const res = gameKeys.filter((game) => {
      const toLower = game.toLowerCase()
      if (query.includes('[') | query.includes('\\') || query.includes('*') || query.includes('(') || query.includes(')') || query.includes('+')) {
        return ''
      } else {
        return toLower.match(query)
      }
    })
    setResults(res)
  }

  const searchFunction = () => {
    if (results.length) {
      return results.map((game) => {
        return (
          <div className='game-card' key={items[game].name}>
            <GameCard key={`${items[game].name}`} game={items[game]} />
          </div>
        )
      })
    } else {
      return <span className='just-text'>No results</span>
    }
  }

  return (
    <div className="browser-page">
      <input id='gamesearch' placeholder='Search' onChange={(event) => { setSearch(event.target.value) }}></input>
      <div id='game-browser'>
        {search.length ? searchFunction() : sorted.map((game) => {
          return (
            <div className='game-card' key={items[game].name}>
              <GameCard key={`${items[game].name}`} game={items[game]} />
            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default GameBrowser