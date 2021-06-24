import axios from 'axios'
import React, {useReducer} from 'react';
import { REMOVE_NOTE, SHOW_LOADER } from '../types';
import { FirebaseContext } from './firebaseContext';
import {firebaseReducer} from './firebaseReducer'

const url = process.env.RECT_APP_DB_URL;

export const FirebaseState = ({children}) =>{
    const initialState ={
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        console.log('fetchNotes', res.data)
    }

    const addNote = async title => {
        const note ={
            title, date: new Date().toJSON()
        }

        const res = await axios.post(`${url}/notes.json`, note);

        console.log('addNote', res.data)
    }

    const remoweNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }
    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, remoweNote, fetchNotes, loading: state.loading, notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}