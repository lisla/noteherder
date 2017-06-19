import React, { Component } from 'react'

import './index.css'
import './NoteForm.css'

class NoteForm extends Component{

  constructor(){
    super()

    console.log('constructor')

    this.state = {
      note: this.blankNote(),
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
      () => {
        this.props.clearCurrentNote()
        this.props.hideNoteForm()
      }
    )
  }

  deleteNote = (ev) => {
    this.props.deleteNote(this.state.note)
    this.setState({ note: this.blankNote() })
  }

  hideForm = () => {
    this.setState({
      show: false,
    })
  }

  componentWillReceiveProps(newProps){
    console.log('receive props')
    this.setState({
      note: newProps.currentNote,
    }, () => console.log(this.state.note.title))
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
              value={this.state.note.title}
              required
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.updateNote}  
              value={this.state.note.body}
              required
            ></textarea>
          </p>
          <button type="submit">Save</button>
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