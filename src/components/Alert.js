import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext';


export default function Alert() {
    const { alert, hide } = useContext(AlertContext)
    if (!alert.visible) {
        return null;
    }
    return (

        <div className={`alert block_alert alert-${alert.type || 'warning'}`}>
            <div>
                <strong>Внимание!</strong>
                {alert.text}
            </div>
            <button onClick={hide} type="button" className="btn-close" aria-label="Close">
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>

    )
}
