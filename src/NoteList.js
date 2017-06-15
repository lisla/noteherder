import React, { Component } from 'react'

import './index.css'
import './NoteList.css'

class NoteList extends Component {

  deleteNote(note, ev){

    if (ev.target.closest('.NoteList').nextElementSibling.querySelector('input').value === note.title &&
        ev.target.closest('.NoteList').nextElementSibling.querySelector('textarea').value === note.note){
        ev.target.closest('.NoteList').nextElementSibling.querySelector('input').value = ''
        ev.target.closest('.NoteList').nextElementSibling.querySelector('textarea').value = ''
    }
    this.props.deleteNote(note)
  }

  displayNote(note, ev){
    console.log(ev.target.nodeName)
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
                  <li key={i} onClick={this.displayNote.bind(this, note)}>
                    <div className="note">
                      <div className="note-title">
                        {note.title}
                      </div>
                      <div className="note-body">
                        <p>
                          {note.note}
                        </p>
                      </div>
                      <button type="button" className="button" onClick={this.deleteNote.bind(this, note)}>
                            <i 
                              className="fa fa-trash-o"
                              aria-hidden="true"
                            ></i>
                      </button>
                    </div>
                 </li>
                )
              })
          }

        </ul>
      </div>
    )
  }
}

export default NoteList