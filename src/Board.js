import React, { Component } from 'react';

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
    }

    eachNote(note, i) {
        return (
            <Note index={i}
                  key={i}   >
                  {note.note}
            </Note>
        )
    }


    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }


}

export default Board;