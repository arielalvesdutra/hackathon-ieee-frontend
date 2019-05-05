import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import './AlarmLine.css'

const AlarmLine = ({ limitType, variable, value }) => (
    <div className="AlarmLine">
        <div className="col-8 d-flex justify-content-around">
            <span>
                {variable}
            </span>
            <span>
                {limitType}
            </span>
            <span>
                {value}
            </span>
        </div>
        <div className="col-4 d-flex justify-content-end">
            <a >
                <FontAwesomeIcon icon={faEdit} />
            </a>
            <a className="ml-4 mr-2">
                <FontAwesomeIcon icon={faTrash} />
            </a>
        </div>
    </div>
)

export default AlarmLine