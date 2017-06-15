import React, { Component } from 'react'

import './index.css'
import './NoteList.css'

class NoteList extends Component {

  deleteNote(note, ev){
    this.props.deleteNote(note)
  }

  render(){
    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          {
              this.props.notes.map((note, i) => {
                return(
                  <li key={i}>
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