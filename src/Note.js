import React, { Component } from 'react'

const Note = (props) => {
  return(
    <li onClick={(note) => props.display(props.note, note)}>
      <div className="note">
        <div className="note-title">
          {props.note.title}
        </div>
        <div className="note-body">
          <p>
            {props.note.note}
          </p>
        </div>
        <button type="button" className="button" onClick={(note) => props.delete(props.note, note)}>
              <i 
                className="fa fa-trash-o"
                aria-hidden="true"
              ></i>
        </button>
      </div>
    </li>
  )
}

export default Note