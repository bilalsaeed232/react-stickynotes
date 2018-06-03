import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus';

import Note from './Note';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Call DAD"
                },
                {
                    id: 1,
                    note: "Complete Portfolio Website"
                },
                {
                    id: 2,
                    note: "Cooking"
                }
            ]
        }

        this.eachNote = this.eachNote.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.edit = this.edit.bind(this);
    }

    eachNote(note, i) {
        return (
            <Note index={i}
                  key={i}  
                  onChange={ this.edit } >
                  {note.note}
            </Note>
        )
    }

    add(note) {
        this.setState((prevState) => ({
            notes: [ ...prevState.notes, 
                { note: note}
             ]
        }))
    }

    edit(newNote, id) {
        this.setState((prevState => ({
            notes: prevState.notes.map( (note) => note.id !== id ? note : { ...note, note: newNote } )
        })))
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }


    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <a id="add" className="btn" onClick={this.add.bind(null, "new Note...")}><FaPlus /></a>
            </div>
        )
    }


}

export default Board;