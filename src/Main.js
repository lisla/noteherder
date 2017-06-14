import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
  return(
    <div className="main">
      <Sidebar />
      <NoteList />
      <NoteForm />
    </div>
  )
}

export default Main