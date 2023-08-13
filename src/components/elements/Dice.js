import React from 'react';

const Dice = (props) => {
    const { id, value, isHeld, handleHoldDice } = props

    const styles = {
        backgroundColor: isHeld ? '#59E391' : '#FFF'
      }

    return (
        <div
            className="dice"
            style={styles}
            onClick={() => handleHoldDice(id)}
        >
            <h2 className="dice-num">
                {value}
            </h2>
        </div>
    )
}

export default Dice
