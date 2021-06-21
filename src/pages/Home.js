import React from 'react'
import Form from '../components/Form'
import Notes from '../components/Notes'

export default function Home() {
    const notes = new Array(3).fill('').map((_, i) => ({id: i, title: `Note ${i+1}`}))
    return (
        <>
            <Form/>
            <hr />
            <Notes notes={notes}/>
        </>
    )
}
