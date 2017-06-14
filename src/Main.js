import React, { Component } from 'react'

import './index.css'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component{

  constructor(){
    super()
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this)
  }
  
  addNote(note, ev){
    ev.preventDefault()
    const notes = [...this.state.notes]
    notes.unshift(note)
    this.setState({ notes })
  }

  render(){
    return(
      <main className="Main">
        <Sidebar onAdd={this.startNewNote}/>
        <NoteList notes={this.state.notes}/>
        <NoteForm addNote={this.addNote}/>
      </main>
    )
  }
}

export default Main