import React from 'react'

import './index.css'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return(
    <main className="Main">
      <Sidebar showNewNote={props.showNewNote}/>
      <NoteList 
        notes={props.notes} 
        deleteNote={props.deleteNote} 
        displayNote={props.displayNote}
      />
      <NoteForm 
        saveNote={props.saveNote} 
        show={props.show} 
        currentNote={props.currentNote} 
        clearCurrentNote={props.clearCurrentNote}
        deleteNote={props.deleteNote}
        hideNoteForm={props.hideNoteForm}
      />
    </main>
  )
}

export default Main