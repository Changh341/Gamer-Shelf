import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import ShelfSelect from "../ShelfSelect";


const ShelfEditForm = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const userShelves = useSelector((state) => state.shelf)
  const [typeSelect, setTypeSelect] = useState(false)
  let shelfIds = Object.keys(userShelves)
  const handleChange = (selectedOption) => {
    setTypeSelect(selectedOption)
  };
  return (
    <div>
      {shelfIds.map((shelfId) => {
        if (userShelves[shelfId] !== null) {
          return (
            <ShelfSelect shelf={userShelves[shelfId]} />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default ShelfEditForm