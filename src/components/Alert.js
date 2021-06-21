import React from 'react'

export default function Alert({alert}) {
    if(!alert){
        return null;
    }
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Внимание!</strong>{alert.text}
            <button type="button" className="btn-close" aria-label="Close">
                <span aria-hidden = 'true'>&times;</span>
            </button>
        </div>
    )
}
