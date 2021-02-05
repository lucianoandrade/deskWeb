import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { ModalStyle } from './styles';

function handleModal() {
  return {
    open: { display: 'block' },
    close: { display: 'fixed' },
    positionTop: { position: 'absolute', top: 0, marginTop: 0 },
    positionBottom: { position: 'absolute', bottom: 0 },
    positionLeft: { position: 'absolute', left: 0 },
    positionRight: { position: 'absolute', right: 0 },
  };
}

const modalStyle = handleModal();

const Modal = ({
  children, open, setOpen, position, id, zIndex, stylewidth, overflow,
}) => {

  const closeModal = (event) => {
    (event === id) && setOpen(false)
  }
  return (
    <ModalStyle
      id={id}
      className="modal"
      open={open}
      onClick={(e) => closeModal(e.target.id)}
      position={position}
      style={{ zIndex }}
      stylewidth={stylewidth}
      overflow={overflow}
    >
      <div
        id="modal-card"
        className="modal-content"
        style={
          position && position === 'top'
            ? modalStyle.positionTop : position === 'bottom'
              ? modalStyle.positionBottom : position === 'left'
                ? modalStyle.positionLeft : position === 'right'
                  ? modalStyle.positionRight : null
        }
      >
        <div className="close-modal">
          <div onClick={() => setOpen(false)} className="icon">
            <MdClose size={24} />
          </div>
        </div>
        {children}
      </div>
    </ModalStyle>
  )
};

export default Modal;
