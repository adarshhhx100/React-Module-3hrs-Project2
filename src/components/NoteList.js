// NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      <h2>Notes List:</h2>
      <ul>
        {notes.map((note, index) => (
          <NoteItem key={index} note={note} onDelete={() => onDeleteNote(index)} />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
