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
            <div class="note">
                <form>
                    <textarea class="text" autoFocus={true} />
                    <a id="save" class="btn" onClick={this.saveNote}><FaFloppyO /></a>
                </form>
            </div>

        )
    }

// displays the text of note
    renderDisplay(){
        return (
            <div class="note">
                <p class="text">Sample Note...</p>
                <span>
                    <a id="edit" class="btn" onClick={this.editNote}><FaPencil /></a>
                    <a id="remove" class="btn"><FaTrash /></a>
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