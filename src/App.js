import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * (6)),
        isHeld: false,
        id: nanoid()
      })
    }

    return newDice
  }

  const [dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(prevDice => prevDice.map(singleDice => {
      return singleDice.isHeld ?
        singleDice :
        {
          value: Math.ceil(Math.random() * (6)),
          isHeld: false,
          id: nanoid()
        }
    }))
  }

  const holdDice = id => {
    setDice(prevDice => prevDice.map(singleDice => {
      return singleDice.id === id ?
        {
          ...singleDice,
          isHeld: !singleDice.isHeld
        } :
        singleDice
    }))
  }

  const diceElements = dice.map(singleDice => {
    return (
      <Dice
        key={singleDice.id}
        value={singleDice.value}
        isHeld={singleDice.isHeld}
        handleHoldDice={() => holdDice(singleDice.id)}
      />)
  })

  return (
    <main>
      <div className="grid">
          {diceElements}
      </div>

      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
