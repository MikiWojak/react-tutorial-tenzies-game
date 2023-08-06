import React, { useState } from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * (6)),
        isHeld: false
      })
    }

    return newDice
  }

  const [dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(allNewDice())
  }

  const diceElements = dice.map(singleDice => {
    return <Dice value={singleDice.value} />
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
