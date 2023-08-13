import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Dice from './components/elements/Dice'

const App = () => {
  const generateNewDice = () => {
    return {
      value: Math.ceil(Math.random() * (6)),
      isHeld: false,
      id: nanoid()
    }
  }

  const allNewDice = () => {
    const newDice = []

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }

    return newDice
  }

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(singleDice => singleDice.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(singleDice => (
      singleDice.value === firstValue
    ))

    if(allHeld && allSameValue) {
      setTenzies(true)

      console.log("You won!")
    }
  }, [dice])

  const rollDice = () => {
    setDice(prevDice => prevDice.map(singleDice => {
      return singleDice.isHeld ?
        singleDice :
        generateNewDice()
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>

      <div className="grid">
        {diceElements}
      </div>

      <button className="roll-btn" onClick={rollDice}>
        { tenzies ? 'New Game' : 'Roll' }
      </button>
    </main>
  );
}

export default App;
