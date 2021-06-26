import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';


export default function Alert() {
    const { alert, hide } = useContext(AlertContext)
    if (!alert.visible) {
        return null;
    }
    return (
        <CSSTransition in = {alert.visible} timeout ={{enter: 500, exit: 350}} classNames ={'alert'} mountOnEnter unmountOnExit>
            <div className={`alert block_alert alert-${alert.type || 'warning'}`}>
                <div>
                    <strong>Внимание!</strong>
                    {alert.text}
                </div>
                <button onClick={hide} type="button" className="btn-close" aria-label="Close">
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}
