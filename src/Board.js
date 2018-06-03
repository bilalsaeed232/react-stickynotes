import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus';

import Note from './Note';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }

        this.eachNote = this.eachNote.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.edit = this.edit.bind(this);
    }

// load data from api before mount
    componentWillMount() {
        var self = this;
        if(this.props.count){
            fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
                .then(response => response.json())
                .then(json => json[0]
                                .split('. ')
                                .forEach(sentence => self.add(sentence.substring(0,25))))
        }
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