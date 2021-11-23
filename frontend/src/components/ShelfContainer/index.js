import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getShelves, addShelf } from "../../store/shelf";
import { Modal } from "../../context/Modal";
import ShelfEditForm from "../ShelfEditForm";
import './ShelfContainer.css'

const ShelfContainer = ({ setSelectedShelf }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userShelves = useSelector((state) => state.shelf)
  const [addShelfInput, setAddShelfInput] = useState(false)
  const [addShelfValue, setAddShelfValue] = useState('')
  const [showModal, setShowModal] = useState(false);


  let shelfIds = Object.keys(userShelves)
  let shelfCount = shelfIds.length

  useEffect(() => {
    dispatch(getShelves(sessionUser.id));
  }, [shelfCount]);

  const handleSubmit = () => {
    if (addShelfValue) {

      const payload = {
        shelfName: addShelfValue,
        userId: sessionUser.id,
        type: 'Tracked'
      }
      dispatch(addShelf(payload))
      setAddShelfInput(false)
      setAddShelfValue('')
    }
  }

  return (
    <>
      <div id='shelf-container'>
        {showModal && <Modal type='shelfEditModal' onClose={() => setShowModal(false)}>
          <ShelfEditForm setSelectedShelf={setSelectedShelf} />
        </Modal>}
        <div>
          <span id='gamer-shelf-header'>Your Shelf</span>
          <button className='smaller-button' onClick={(event) => { setShowModal(true) }}>[Edit]</button>
        </div>
        <li className='clickable-shelf' onClick={(event) => { setSelectedShelf(null) }}>All games</li>
        {shelfIds.map((shelfId) => {
          if (userShelves[shelfId] !== null) {
            return (
              <li className='clickable-shelf' onClick={(event => { setSelectedShelf(shelfId) })} key={`Shelf ${shelfId}`}>
                {userShelves[shelfId].shelfName}
              </li>
            )
          } else {
            return null
          }
        })}
      </div>
      <div>
        {!addShelfInput && <button className='standard-btn' onClick={(event) => setAddShelfInput(true)}>Add Shelf</button>}
        {addShelfInput && <div>
          <input className='standard-input' placeholder='Enter shelf name' value={addShelfValue} onChange={(event) => { setAddShelfValue(event.target.value) }} required={true}></input>
          <button className='standard-btn' onClick={(event) => { handleSubmit() }}>Add</button>
          <button className='standard-btn' onClick={(event) => { setAddShelfInput(false) }}>Close</button>
        </div>}
      </div>
    </>
  )
}

export default ShelfContainer