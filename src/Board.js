import React, { Component } from 'react';

import Note from './Note';


class Board extends Component {
    render() {
        return (
            <div class="board">
                <Note />
            </div>
        )
    }
}

export default Board;