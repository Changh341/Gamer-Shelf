import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import ShelfContainer from "../ShelfContainer";
import { editShelf, removeShelf } from "../../store/shelf";
import './ShelfSelect.css'


const ShelfSelect = ({ shelf, setSelectedShelf }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);



  const handleDelete = (shelfId) => {
    dispatch(removeShelf(shelfId))
    setSelectedShelf(null)
  }

  const [typeSelect, setTypeSelect] = useState(false)
  const [renameInput, setRenameInput] = useState(false)
  const [renameValue, setRenameValue] = useState(shelf.shelfName)

  const handleChange = (selectedOption) => {
    setTypeSelect(selectedOption)
  };

  const handleNameChange = async (name) => {
    const payload = {
      id: shelf.id,
      shelfName: name,
      userId: sessionUser.id,
      type: shelf.type
    }
    dispatch(editShelf(payload))
    setRenameInput(false)
  }

  const handleTypeChange = (type) => {
    const payload = {
      id: shelf.id,
      shelfName: shelf.shelfName,
      userId: sessionUser.id,
      type
    }
    dispatch(editShelf(payload))

  }

  return (
    <li className='shelf-edit-line' key={`Edit shelf ${shelf.id}`}>
      <div className='left-edit-line'>
        <button className='x-button' onClick={(event) => { handleDelete(shelf.id) }}>x</button>
        {!renameInput && <span className='shelf-name-edit'>{shelf.shelfName}</span>}
        <span >{!renameInput}</span>
        {renameInput &&
          <>
            <input className='input-bar' value={renameValue} onChange={(event) => { setRenameValue(event.target.value) }}></input>
            <button className='navbar-btns' onClick={(event) => { handleNameChange(renameValue) }}>Save</button>
            <button className='navbar-btns' onClick={(event) => {
              setRenameInput(false);
              setRenameValue(shelf.shelfName)
            }}>Cancel</button>
          </>
        }
      </div>
      <div className='right-edit-line'>
        {!renameInput && <button className='navbar-btns' onClick={(event) => { setRenameInput(true) }}>Rename</button>}
        <select id='selectbar-edit-shelf' className='navbar-btns' value={typeSelect ? typeSelect : shelf.type} onChange={(event) => { handleChange(event.target.value) }} >
          <option value='Tracked'>Tracked</option>
          <option value='Not Tracked'>Not Tracked</option>
          <option value='Ongoing'>Ongoing</option>
        </select>

        <button className='navbar-btns' onClick={(event) => { handleTypeChange(typeSelect) }}>Change</button>
      </div>
    </li>
  )
}

export default ShelfSelect