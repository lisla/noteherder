import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

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
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          this.authHandler(user)
        }
      }
    )
  }
  
  getUserFromLocalStorage = () => {
    const uid = localStorage.getItem('uid')
    if(!uid) return
    this.setState({ uid })
  }

  syncNotes = () => {
    this.ref = base.syncState(
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
    notes[note.id] = null
    this.setState({ notes })

    if(note.id === this.state.currentNote.id){
      this.clearCurrentNote()
      this.hideNoteForm()
    }
  }

  showNewNote = () => {
    this.setState({
      show: true,
      currentNote: this.blankNote(),
    })
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
    localStorage.setItem('uid', userData.uid)
    this.setState(
      { uid: userData.uid },
      this.syncNotes
    )
  }

  signOut = () => { 
    auth
      .signOut()
      .then(
        () => {
          base.removeBinding(this.ref)
          this.clearCurrentNote()
          localStorage.removeItem('uid')
          this.setState({ uid: null, notes: {} })
        }
      )
    
  }

  renderMain = () => {
    return(
      <div>
        
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/notes" render={() => (
            this.signedIn()
            ? (
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
            : <Redirect to="/sign-in" component={SignIn} />)
          }/>
          <Route path="/sign-in" render={() => (
            !this.signedIn()
            ? <SignIn />
            : <Redirect to="/notes" />
          )} />
          <Route render={() => <Redirect to="/notes" />} />
        </Switch>
        {/*{ this.signedIn() ? this.renderMain() : <SignIn /> }*/}
      </div>
    )
  }
}

export default App
