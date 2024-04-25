// App.js
import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import AddNoteModal from './components/AddNoteModal';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setIsModalOpen(false);
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Notes App</h1>
       
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div>
        <p>Total Notes: {notes.length}</p>
        <p>Notes Showing: {filteredNotes.length}</p>
        <button onClick={() => setIsModalOpen(true)}>Add Note</button>
        <NoteList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
      </div>
      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddNote={handleAddNote}
      />
    </div>
  );
}





export default App;
