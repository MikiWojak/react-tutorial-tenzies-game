import React from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  const allNewDice = () => {
    const array = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * (6) + 1)
    );

    console.log(array)
  }

  allNewDice()

  return (
    <main>
      <div className="grid">
        <Dice value={1} />
        <Dice value={2} />
        <Dice value={3} />
        <Dice value={4} />
        <Dice value={5} />
        <Dice value={6} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
      </div>
    </main>
  );
}

export default App;
