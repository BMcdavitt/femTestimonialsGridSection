import React from 'react'
import './css/Card.css'

export default function Card(props) {
  const classList = `Card ${props.theme}Theme location${props.layoutId}`
  const imageClassList = `header__picture ${props.theme}Theme`
  return (
    <div className={classList}>
      <div className="header">
        <div className={imageClassList}>
          <img src={`./images/${props.picture}`} alt="mug shot of the quotee" />
        </div>
        <div className="header__nameBlock">
          <div className="header__nameBlock__name">{props.name}</div>
          <div className="header__nameBlock__status">{props.status}</div>
        </div>
      </div>
      <div className="quote">
        <div className="quote__title">{props.quoteTitle}</div>
        <div className="quote__text">{props.quoteBody}</div>
      </div>
    </div>
  )
}
