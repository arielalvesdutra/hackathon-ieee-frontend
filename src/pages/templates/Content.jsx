import React from 'react'

import './Content.css'

const Content =  props =>(

    <div className="Content">
        <div className="Content-container col-12 col-md-10 col-sm-8 bg-gray">

            <h3>
                { props.title || 'Título do artigo' }
            </h3>
            <hr />
            {props.children}
        </div>
    </div>
)

export default Content

