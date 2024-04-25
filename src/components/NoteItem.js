// NoteItem.js
import React from 'react';

function NoteItem({ note, onDelete }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default NoteItem;
