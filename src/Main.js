import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.css'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return(
    <main className="Main">
      <Sidebar 
        showNewNote={props.showNewNote}
        saveNote={props.saveNote} 
      />
      <NoteList 
        notes={props.notes} 
        deleteNote={props.deleteNote} 
        displayNote={props.displayNote}
      />
      <Switch>
        <Route path="/notes/:id" render={(navProps) => 
          <NoteForm {...props} {...navProps}/> }
        />
        <Route render={(navProps) =>
          <NoteForm {...props} {...navProps}/> } 
        />
      </Switch>
    </main>
  )
}

export default Main