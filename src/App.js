import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * (6)),
        isHeld: false,  // @TODO Change to true to check styles
        id: nanoid()
      })
    }

    return newDice
  }

  const [dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(allNewDice())
  }

  const holdDice = id => {
    console.log({ id })
  }

  const diceElements = dice.map(singleDice => {
    return (
      <Dice
        key={singleDice.id}
        id={singleDice.id}
        value={singleDice.value}
        isHeld={singleDice.isHeld}
        handleHoldDice={holdDice}
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
