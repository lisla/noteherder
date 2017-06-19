import React from 'react'

import './index.css'
import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { 
          Object.keys(props.notes).map((noteId) => {
            return <Note 
                    note={props.notes[noteId]} 
                    key={noteId} 
                    deleteNote={props.deleteNote} 
                    displayNote={props.displayNote}
                   />
          }) 
        }
      </ul>
    </div>
  )
}

export default NoteList