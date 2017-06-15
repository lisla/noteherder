import React, { Component } from 'react'

import './index.css'
import './NoteForm.css'

class NoteForm extends Component{

  constructor(){
    super()
    this.state = {
      title: '',
      note: '',
      show: false,
    }
    this.updateNote = this.updateNote.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
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

  submitNote(ev){

    ev.preventDefault()
    this.props.addNote(this.state)

    ev.currentTarget.reset()
    this.hideForm()
    this.setState({
      title: '',
      note: '',
    })
  }

  deleteNote(ev){
    ev.currentTarget.closest('form').reset()
    this.hideForm()
    ev.currentTarget.closest('.NoteForm').classList.add('hidden')
  }

  hideForm(){
    this.setState({
      show: false,
    })
  }

  render(){
    return(
      <div className={this.state.show ? "NoteForm" : "NoteForm hidden"}>
        <form onSubmit={this.submitNote.bind(this)}>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note"
              onChange={this.updateTitle}
              required
            />
          </p>
          <p>
            <textarea 
              name="body"
              cols="30" 
              rows="10" 
              placeholder="Just start typing..."
              onChange={this.updateNote}  
              required
            ></textarea>
          </p>
          <p>
            <button type="submit" className="button">Submit</button>
          </p>
          <p>
            <button type="button" className="button" onClick={this.deleteNote}>
              <i 
                className="fa fa-trash-o"
                aria-hidden="true"
              ></i>
            </button>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm