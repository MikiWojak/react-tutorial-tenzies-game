import React, { useState } from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    return Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * (6) + 1)
    );
  }

  const [diceNumbers, setDiceNumbers] = useState(() => allNewDice())

  const diceElements = diceNumbers.map((diceNumber, index) => {
    return <Dice key={index} value={diceNumber} />
  })

  return (
    <main>
      <div className="grid">
          {diceElements}
      </div>
    </main>
  );
}

export default App;
