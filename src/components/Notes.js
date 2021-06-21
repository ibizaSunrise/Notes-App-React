import React from 'react'

export default function Notes({ notes }) {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li class="list-group-item note"
                    key={note.id}>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            ))}
        </ul>
    )
}