import React, { Component } from 'react';

import './index.css'
import './App.css'
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {

  constructor(){
    super()

    this.state = {
      notes: {},
      currentNote: this.blankNote(),
      show: false,
      uid: null,
    }
  }

  componentWillMount = () => {
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          this.authHandler(user)
        }
      }
    )
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      }
    )
  }

  blankNote = () => {
    return({
      id: null,
      title: '',
      body: '',
    })
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ 
      notes: notes,
      currentNote: note, 
    })
  }

  displayNote = (note) => {
    const currentNote = {...note}
    this.setState({
      currentNote,
      show: true,
    }, () => console.log(this.state.currentNote))
  }

  deleteNote = (note) => {
    const notes = {...this.state.notes}
    delete notes[note.id]
    this.setState({ notes })

    if(note.id === this.state.currentNote.id){
      console.log('clear current note')
      this.clearCurrentNote()
      this.hideNoteForm()
    }
  }

  showNewNote = () => {
    this.setState({
      show: true
    }, () => console.log(this.state.show))
  }

  clearCurrentNote = () => {
    this.setState({
      currentNote: this.blankNote()
    })
  }

  hideNoteForm = () => {
    this.setState({
      show: false,
    })
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
    this.setState(
      { uid: userData.uid },
      this.syncNotes
    )
  }

  signOut = () => { 
    auth
      .signOut()
      .then(() => this.setState({ notes: {}, uid: null }))
    
  }

  renderMain = () => {
    return(
      <div>
        <SignOut signOut={this.signOut} />
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          show={this.state.show}

          saveNote={this.saveNote} 
          deleteNote={this.deleteNote} 
          displayNote={this.displayNote} 
          showNewNote={this.showNewNote}
          clearCurrentNote={this.clearCurrentNote}
          hideNoteForm={this.hideNoteForm}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    )
  }
}

export default App
