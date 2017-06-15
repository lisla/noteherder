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
      new: false,
    }
    this.addNote = this.addNote.bind(this)
  }
  
  addNote(note){
    const notes = [...this.state.notes]
    notes.unshift(note)
    this.setState({ notes }, console.log(notes))
  }

  deleteNote(note){
    const notes = [...this.state.notes]
    notes.map((n, i) => {
      if(n === note){
        console.log(n)
        notes.splice(i, 1)
      }
    })
    this.setState({ notes }, console.log(notes))
  }

  startNewNote(){
    this.setState({
      new: true
    })
  }

  render(){
    return(
      <main className="Main">
        <Sidebar />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
        <NoteForm showNote={this.state.new} addNote={this.addNote}/>
      </main>
    )
  }
}

export default Main