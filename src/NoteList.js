import React, { Component } from 'react'

import './index.css'
import './NoteList.css'
import Note from './Note'

class NoteList extends Component {

  constructor(){
    super()

    this.deleteNote = this.deleteNote.bind(this)
    this.displayNote = this.displayNote.bind(this)

  }

  deleteNote(note, ev){
    if (ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('input').value === note.title &&
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('textarea').value === note.note){
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('input').value = ''
        ev.currentTarget.closest('.NoteList').nextElementSibling.querySelector('textarea').value = ''
    }
    this.props.deleteNote(note)
  }

  displayNote(note, ev){
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
                  <Note note={note} display={(note, ev) => this.displayNote(note, ev)} delete={(note, ev) => this.deleteNote(note, ev)} />
                )
              })
          }
        </ul>
      </div>
    )
  }
}

export default NoteList