import React from 'react'

const Note = (props) => {

  return(
    <li>
      <div className="note" onClick={(ev) => props.displayNote(props.note)}>
        <div className="note-title">
          {props.note.title}
        </div>
        <div className="note-body">
          <p>
            {props.note.body}
          </p>
        </div>
      </div>
      <div>
        <button type="button" onClick={(ev) => props.deleteNote(props.note) }>
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