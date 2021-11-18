import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import ShelfContainer from "../ShelfContainer";
import ShelfViewer from "../ShelfViewer";


const HomePage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const [selectedShelf, setSelectedShelf] = useState(null)

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div>
      <div>
        <ShelfContainer setSelectedShelf={setSelectedShelf} />
      </div>
      <div>
        {selectedShelf && <ShelfViewer selectedShelf={selectedShelf} />}
      </div>
    </div>
  )
}

export default HomePage