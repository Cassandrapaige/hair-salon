import React from 'react'

import './card-item.styles.scss'

const CardItem = ({ title, text }) => {
      return (
          <div className = 'content'>
            <div className="content-inner">
              <h3 className = 'title'>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
      )
}

export default CardItem;
