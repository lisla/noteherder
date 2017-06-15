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
      notes: [],
      show: false,
    }
    this.addNote = this.addNote.bind(this)
  }
  
  addNote(note){
    const notes = [...this.state.notes]
    notes.unshift(note)
    this.setState({ notes })
  }

  deleteNote(note){
    const notes = [...this.state.notes]
    notes.map((n, i) => {
      if(n === note){
        notes.splice(i, 1)
      }
      return notes
    })
    this.setState({ notes })
  }

  startNewNote(){
    this.setState({
      show: true
    })
  }

  render(){
    return(
      <main className="Main" ref="mainComponent">
        <Sidebar />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
        <NoteForm showNote={this.state.show} addNote={this.addNote}/>
      </main>
    )
  }
}

export default Main