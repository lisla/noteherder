import React, { Component } from 'react'

import './index.css'
import './NoteForm.css'

class NoteForm extends Component{

  constructor(props){
    super(props)

    this.state = {
      note: this.blankNote()
    }
  }

  blankNote = () => {
    return({
      id: null,
      title: '',
      body: '',
    })
  }

  updateNote = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note }, 
      () => this.props.saveNote(note)
    )
  }

  saveNote = (ev) => {
    ev.preventDefault()
    this.setState(
      { note: this.blankNote() },
      () => this.props.clearCurrentNote()
    )
  }

  deleteNote = (ev) => {
    this.setState({ note: this.blankNote() })
  }

  hideForm = () => {
    this.setState({
      show: false,
    })
  }

  render(){
    return(
      <div className={this.props.show ? "NoteForm" : "NoteForm hidden"}>
        <form onSubmit={this.saveNote}>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note"
              onChange={this.updateNote}
              value={!(Object.keys(this.props.currentNote).length === 0) ? this.props.currentNote.title : this.state.note.title}
              required
            />
          </p>
          <p>
            <textarea 
              name="body"
              placeholder="Just start typing..."
              onChange={this.updateNote}  
              value={!(Object.keys(this.props.currentNote).length === 0) ? this.props.currentNote.body : this.state.note.body}
              required
            ></textarea>
          </p>
          <button type="submit">Save and New</button>
          <button type="button" onClick={this.deleteNote}>
            <i 
              className="fa fa-trash-o"
              aria-hidden="true"
            ></i>
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm