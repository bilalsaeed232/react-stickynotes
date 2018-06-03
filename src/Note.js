import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';


class Note extends Component {
    render(){
        return (
            <div class="note">
                <p>Sample Note...</p>
                <span>
                    <a id="edit" class="btn"><FaPencil /></a>
                    <a id="remove" class="btn"><FaTrash /></a>
                </span>
            </div>
        )
    }
}

export default Note;