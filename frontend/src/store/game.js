import { csrfFetch } from "./csrf"
const initialState = { null: null }

const LOAD = 'games/LOAD'
const ADD = 'games/ADD'
const REVIEW = 'games/REVIEW'
const DESTROY = 'review/DESTROY'

const load = (games) => ({
  type: LOAD,
  games
})

const add = (game) => ({
  type: ADD,
  game
})

const review = (game) => ({
  type: REVIEW,
  game
})

const deletion = (game) => ({
  type: DESTROY,
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

export const addAReview = (payload) => async (dispatch) => {
  const { gameId } = payload
  try {
    const response = await csrfFetch(`/api/games/${gameId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const game = await response.json()
      dispatch(review(game))
    }
  } catch (error) {
    return error
  }
}

export const editAReview = (payload) => async (dispatch) => {
  const { gameId } = payload
  try {
    const response = await csrfFetch(`/api/games/${gameId}/reviews`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const game = await response.json()
      dispatch(review(game))
    }
  } catch (error) {
    return error
  }
}

export const destroyAReview = (payload) => async (dispatch) => {
  const { gameId } = payload
  try {
    const response = await csrfFetch(`/api/games/${gameId}/reviews`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const game = await response.json()
      dispatch(deletion(game))
    }
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
    case REVIEW:
      newState = { ...state }
      newState[action.game.name] = action.game
      return newState
    case DESTROY:
      newState = { ...state }
      newState[action.game.name].Review = null
      return newState
    default: return state
  }
}

export default gameReducer