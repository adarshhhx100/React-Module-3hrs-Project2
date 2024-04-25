import React, { useState } from 'react';

function ModalContent({ isOpen, onClose, onAddNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddNote = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      onAddNote({
        title,
        description
      });
      setTitle('');
      setDescription('');
      onClose(); // Close the modal after adding the note
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>Add Your Notes Here !!</div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter note title"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter note description"
        />
        <button onClick={handleAddNote}>Add</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalContent;

