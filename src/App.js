import React, { useState } from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    return Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * (6) + 1)
    );
  }

  const [dice, setDice] = useState(allNewDice())

  const rollDice = () => {
    setDice(allNewDice())
  }

  const diceElements = dice.map(item => {
    return <Dice value={item} />
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
