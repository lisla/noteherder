import React, { Component } from 'react'

import './index.css'
import './NoteForm.css'

class NoteForm extends Component{

  constructor(){
    super()
    this.state = {
      title: '',
      note: '',
    }
    this.updateNote = this.updateNote.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }
  
  updateTitle(ev){
    this.setState({
      title: ev.target.value
    }, () => console.log(this.state.title))
  }

  updateNote(ev){
    this.setState({
      note: ev.target.value,
    }, () => console.log(this.state.note))
  }

  render(){
    return(
      <div className="NoteForm">
        <form onSubmit={this.props.addNote.bind(this, this.state)}>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note" 
              onChange={this.updateTitle}
            />
          </p>
          <p>
            <textarea 
              name="body"
              cols="30" 
              rows="10" 
              placeholder="Just start typing..."
              onChange={this.updateNote}  
            ></textarea>
          </p>
          <p>
            <button type="submit" className="button">Submit</button>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm