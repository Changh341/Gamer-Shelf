import { csrfFetch } from "./csrf.js";
const initialState = { null: null }

const LOAD = 'shelves/LOAD';
const ADD = 'shelves/ADD';
const REMOVE = 'shelves/REMOVE';
const EDIT = 'shelves/EDIT'

const load = (shelves) => ({
  type: LOAD,
  shelves
})

const add = (shelf) => ({
  type: ADD,
  shelf
})

const remove = (shelf) => ({
  type: REMOVE,
  shelf
})

const edit = (shelf) => ({
  type: EDIT,
  shelf
})


export const getShelves = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/users/${userId}/shelves`)
    if (response.ok) {
      const shelves = await response.json()
      dispatch(load(shelves))
    } else {
      throw console.error('Fetching shelves error!');
    }
  } catch (error) {
    return error
  }
}

export const addShelf = (payload) => async (dispatch) => {
  const { userId } = payload
  try {
    const response = await csrfFetch(`/api/users/${userId}/shelves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      const shelf = await response.json()
      dispatch(add(shelf))
    } else {
      throw console.error('Creation Error!')
    }
  } catch (error) {
    return error
  }
}

export const removeShelf = (shelfId, userId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/users/${userId}/shelves/${shelfId}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      dispatch(remove(shelfId))
    } else {
      throw console.error('Deletion error!')
    }
  } catch (error) {
    return error
  }
}

export const editShelf = (payload) => async (dispatch) => {
  const { id, userId } = payload
  try {
    const response = await csrfFetch(`/api/users/${userId}/shelves/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      dispatch(edit(payload))
    } else {
      throw console.error('Editing Error!')
    }
  } catch (error) {
    return error
  }
}

function shelfReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD:
      action.shelves.forEach((shelf) => {
        newState[shelf.id] = shelf
      })
      return { ...newState }
    case ADD:
      newState = { ...state }
      newState[action.shelf.id] = action.shelf
      return newState
    case REMOVE:
      newState = { ...state }
      delete newState[action.shelf]
      return newState
    case EDIT:
      newState = { ...state }
      newState[action.shelf.shelfId] = action.shelf
      return newState
    default: return state
  }
}
export default shelfReducer