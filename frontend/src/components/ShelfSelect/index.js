import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import ShelfContainer from "../ShelfContainer";
import { editShelf, removeShelf } from "../../store/shelf";


const ShelfSelect = ({ shelf }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);



  const handleDelete = (shelfId) => {
    dispatch(removeShelf(shelfId))
  }

  const [typeSelect, setTypeSelect] = useState(false)
  const [renameInput, setRenameInput] = useState(false)
  const [renameValue, setRenameValue] = useState(shelf.shelfName)

  const handleChange = (selectedOption) => {
    setTypeSelect(selectedOption)
    console.log(`Option selected:`, selectedOption);
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
    <li key={`Edit shelf ${shelf.id}`}>
      <button onClick={(event) => { handleDelete(shelf.id) }}>x</button>
      {!renameInput && shelf.shelfName}
      <span>{!renameInput && '(3)'}</span>
      {!renameInput && <button onClick={(event) => { setRenameInput(true) }}>Rename</button>}
      {renameInput &&
        <>
          <input value={renameValue} onChange={(event) => { setRenameValue(event.target.value) }}></input>
          <button onClick={(event) => { handleNameChange(renameValue) }}>Save</button>
          <button onClick={(event) => {
            setRenameInput(false);
            setRenameValue(shelf.shelfName)
          }}>Cancel</button>
        </>
      }
      <select value={typeSelect ? typeSelect : shelf.type} onChange={(event) => { handleChange(event.target.value) }} >
        <option value='Tracked'>Tracked</option>
        <option value='Not Tracked'>Not Tracked</option>
        <option value='Ongoing'>Ongoing</option>
      </select>

      <button onClick={(event) => { handleTypeChange(typeSelect) }}>Change</button>
    </li>
  )
}

export default ShelfSelect