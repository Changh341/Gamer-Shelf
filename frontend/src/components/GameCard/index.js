import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useEffect, useState } from 'react';
import { Modal } from "../../context/Modal";
import GameDetail from "../GameDetails";
import './GameCard.css'
const GameCard = ({ game }) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const [showTitle, setShowTitle] = useState(false)
  const [showModal, setShowModal] = useState(false)


  return (
    <>
      {showTitle && <div className='game-title-hover' onMouseLeave={(event) => setShowTitle(false)} onClick={(event) => { setShowModal(true) }}>{game.name}</div>}
      <img
        onMouseEnter={(event) => setShowTitle(true)}


        src={game.imageURL}>
      </img>
      {showModal && <Modal type='gameDetails' onClose={() => setShowModal(false)}>
        <GameDetail game={game} />
      </Modal>}
    </>
  )
}

export default GameCard