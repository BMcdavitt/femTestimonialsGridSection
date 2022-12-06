import React from 'react'
import Card from './Card'
import data from './data'

import './css/App.css'

const cardData = data.testimonialData

function App() {
  let x = 0

  const cards = cardData.map((value, id) => {
    x < 5 ? x++ : (x = 1)
    return (
      <Card
        key={id}
        name={value.name}
        status={value.status}
        quoteTitle={value.quoteTitle}
        quoteBody={value.quoteBody}
        theme={value.theme}
        picture={value.picture}
        layoutId={x}
      />
    )
  })

  return (
    <div className="App">
      <div className="cardHolder">{cards}</div>
    </div>
  )
}

export default App
