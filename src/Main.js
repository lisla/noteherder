import React, { Component } from 'react'

import './index.css'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
  return(
    <main className="Main">
      <Sidebar />
      <NoteList />
      <NoteForm />
    </main>
  )
}

export default Main