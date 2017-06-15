import React from 'react'

import './index.css'
import quill from './quill.svg'
import './Sidebar.css'

const Sidebar = (props) => {
  return(
    <nav className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <button className="new-note">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new-hover.png" alt="New note" />
        <img onClick={props.showNewNote} className="outline" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/new.png" alt="New note" />
      </button>
    </nav>
  )
}

export default Sidebar