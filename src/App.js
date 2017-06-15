import React, { Component } from 'react';

import './index.css'
import './App.css'
import Main from './Main'

class App extends Component {

  constructor(){
    super()

    this.state = {
      notes: {},
      currentNote: {},
      show: false,
    }
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  displayNote = (note) => {
    const currentNote = {...note}
    this.setState({
      currentNote,
      show: true,
    })
  }

  deleteNote = (note) => {
    const notes = {...this.state.notes}

    delete notes[note.id]
    
    this.setState({ notes })
  }

  showNewNote = () => {
    this.setState({
      show: true
    }, () => console.log(this.state.show))
  }

  clearCurrentNote = () => {
    this.setState({
      currentNote: {}
    })
  }

  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          show={this.state.show}

          saveNote={this.saveNote} 
          deleteNote={this.deleteNote} 
          displayNote={this.displayNote} 
          showNewNote={this.showNewNote}
          clearCurrentNote={this.clearCurrentNote}
        />
      </div>
    )
  }
}

export default App
