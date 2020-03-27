import React, { useState } from 'react'

import DATA from '../card/card.data'
import Card from '../card/card.component'

import './card-container.style.scss'

const CardContainer = () => {

    const [data, setData] = useState(DATA);

    return (
        <div className = 'card-container'>
            <Card items = {data}/> 
        </div>
    )
}

export default CardContainer
