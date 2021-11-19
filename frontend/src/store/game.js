import { csrfFetch } from "./csrf"
const initialState = { null: null }

const LOAD = 'games/LOAD'
const ADD = 'games/ADD'

const load = (games) => ({
  type: LOAD,
  games
})

const add = (game) => ({
  type: ADD,
  game
})

export const getUserGames = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users/${userId}/games`)
    if (response.ok) {
      const games = await response.json()
      dispatch(load(games))
    } else {
      throw console.error('Loading Error!')
    }
  } catch (error) {
    return error
  }
}

export const addAGame = (payload) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/shelves/${payload.shelfId}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    dispatch(add(response))
  } catch (error) {
    return error
  }
}

function gameReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD:
      action.games.forEach((game) => {
        newState[game.name] = game
      })
      return newState
    case ADD:
      newState = { ...state }
      newState[action.name] = action
      return newState
    default: return state
  }
}

export default gameReducer