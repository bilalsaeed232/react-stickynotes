import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.editNote = this.editNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

// change the render mode to edit
    editNote() {
        this.setState({
            editing: true
        })
    }

// save your changes and update the state
    saveNote() {
        this.setState({
            editing: false
        })
    }

// displays the form to edit text of note
    renderForm() {
        return (
            <div className="note">
                <form>
                    <textarea 
                        className="text" autoFocus={true} 
                        ref={ (input) => this._newText = input }
                        defaultValue={this._newText}    
                        />
                    <a id="save" className="btn" onClick={this.saveNote}><FaFloppyO /></a>
                </form>
            </div>

        )
    }

// displays the text of note
    renderDisplay(){
        return (
            <div className="note">
                <p className="text">{this.props.children}</p>
                <span>
                    <a id="edit" className="btn" onClick={this.editNote}><FaPencil /></a>
                    <a id="remove" className="btn"><FaTrash /></a>
                </span>
            </div>
        )
    }


//decide which display to show
    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Note;