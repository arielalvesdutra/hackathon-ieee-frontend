import React from 'react'

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
            <button className="btn bg-warning">Editar</button>
            <button className="btn btn-default bg-danger ml-2">Remover</button>
        </div>
    </div>
)

export default AlarmLine