import React from 'react'

import CardItem from '../card-item/card-item.component'
import './card.styles.scss'

const Card = ({ items }) => {
    return (
        <>
            {items.map(({ id, image, ...rest }) => (
                <div className="card" style= {{
                    backgroundImage: `url(${image})`
                }}>
                    <CardItem key = {id} {...rest}/>
                </div>
            ))}
        </>
    )
}

export default Card;
