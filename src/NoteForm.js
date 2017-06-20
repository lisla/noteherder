import React, { Component } from 'react'

import './index.css'
import './NoteForm.css'

class NoteForm extends Component{

  constructor(){
    super()

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

  deleteNote = (ev) => {
    this.props.deleteNote(this.state.note)
    this.setState({ note: this.blankNote() })
  }

  componentWillReceiveProps(newProps){
    this.setState({
      note: newProps.currentNote,
    })
  }

  render(){
    return(
      <div className={this.props.show ? "NoteForm" : "NoteForm hidden"}>
        <form>
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