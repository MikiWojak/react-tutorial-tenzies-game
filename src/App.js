import React, { useState } from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    return Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * (6) + 1)
    );
  }

  const [diceNumbers, setDiceNumbers] = useState(allNewDice())

  const roll = () => {
    setDiceNumbers(allNewDice())
  }

  const diceElements = diceNumbers.map(diceNumber => {
    return <Dice value={diceNumber} />
  })

  return (
    <main>
      <div className="grid">
          {diceElements}
      </div>

      <button className="roll-btn" onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
