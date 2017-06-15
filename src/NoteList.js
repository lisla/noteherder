import React, { Component } from 'react'

import './index.css'
import './NoteList.css'
import Note from './Note'

class NoteList extends Component {

  deleteNote = (note, ev) => {
    if (ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('input').value === note.title &&
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('textarea').value === note.note){
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('input').value = ''
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('textarea').value = ''
        ev.currentTarget.closest('.NoteList').nextElementSibling.className = "NoteForm hidden"
    }
    this.props.deleteNote(note)
  }

  displayNote = (note, ev) => {
    if(! ( (ev.target.nodeName === 'BUTTON') || (ev.target.nodeName === 'I'))){
      ev.target.closest('.NoteList').nextElementSibling.className = "NoteForm"
      ev.target.closest('.NoteList').nextElementSibling.querySelector('input').value = note.title
      ev.target.closest('.NoteList').nextElementSibling.querySelector('textarea').value = note.note
    }
  }

  render(){
    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          {
              this.props.notes.map((note, i) => {
                return(
                  <Note key={i} note={note} display={this.displayNote} delete={this.deleteNote} />
                )
              })
          }
        </ul>
      </div>
    )
  }
}

export default NoteList