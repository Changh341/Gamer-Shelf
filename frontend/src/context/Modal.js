import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ type, onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;
  if (type === 'shelfEditModal') {
    return ReactDOM.createPortal(
      <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-content-editShelf'>{children}</div>
      </div>,
      modalNode
    );
  }
  if (type === 'gameDetails') {
    return ReactDOM.createPortal(
      <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-content-gameDetails'>{children}</div>
      </div>,
      modalNode
    );
  }

  if (type === 'reviewModal') {
    return ReactDOM.createPortal(
      <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-content-review'>{children}</div>
      </div>,
      modalNode
    );
  }

  if (type === 'progressUpdate') {
    return ReactDOM.createPortal(
      <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-progress-update'>{children}</div>
      </div>,
      modalNode
    );
  }

  if (type === 'aboutMe') {
    return ReactDOM.createPortal(
      <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-about-me'>{children}</div>
      </div>,
      modalNode
    );
  }
}
