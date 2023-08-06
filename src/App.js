import React from 'react';

import Dice from './components/elements/Dice'

const App = () => {
  return (
    <main>
      <div className="dices-grid">
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
        <Dice value={1} />
      </div>
    </main>
  );
}

export default App;
