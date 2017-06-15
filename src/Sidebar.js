import React, { Component } from 'react'

import './index.css'
import quill from './quill.svg'
import './Sidebar.css'

class Sidebar extends Component{

  showNote = (ev) => {
    ev.target.closest('.Sidebar').nextElementSibling.nextElementSibling.className = "NoteForm"
  }

  render(){
    return(
      <nav className="Sidebar">
        <div className="logo">
          <img src={quill} alt="Noteherder" />
        </div>
        <button className="new-note">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note" />
          <img onClick={this.showNote} className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note" />
        </button>
      </nav>
    )
  }
}

export default Sidebar