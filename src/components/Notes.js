import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Notes({ notes, onRemove}) {
    return (
        <TransitionGroup components="ul" classNames="list-group">
            {notes.map(note => (
                <CSSTransition key={note.id} classNames={'note_animation'} timeout={800}>
                <li className="list-group-item note"
                    >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm" onClick = {() => onRemove(note.id)}>&times;</button>
                </li>
                </CSSTransition>
            ))}
        
        </TransitionGroup>
    )
}
