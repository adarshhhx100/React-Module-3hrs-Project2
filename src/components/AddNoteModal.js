import React from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

function AddNoteModal({ isOpen, onClose, onAddNote }) {
  return (
    <>
      {/* <button onClick={() => onClose()}>Add Note</button> */}
      {isOpen && createPortal(
        <ModalContent 
          onClose={onClose} 
          onAddNote={onAddNote} 
        />,
        document.body
      )}
    </>
  );
}

export default AddNoteModal;






