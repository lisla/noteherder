import React, { Component } from 'react'

import './index.css'
import './NoteList.css'

class NoteList extends Component {

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