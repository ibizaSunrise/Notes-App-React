import axios from 'axios'
import React, { useReducer } from 'react';
import { REMOVE_NOTE, SHOW_LOADER } from '../types';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer'

const url = "https://react-hooks-bebc4-default-rtdb.firebaseio.com/";

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        console.log('fetchNotes', res.data)
    }

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${url}/notes.json`, note);
            console.log('addNote', res.data)
            //dispatch({type: ADD_NOTE, payload})
        } catch (e) {
            throw new Error(e.message)
        }

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