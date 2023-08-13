import React from 'react';

const Dice = (props) => {
    const { value, isHeld } = props

    const styles = {
        backgroundColor: isHeld ? '#59E391' : '#FFF'
      }

    return (
        <div className="dice" style={styles}>
            <h2 className="dice-num">
                {value}
            </h2>
        </div>
    )
}

export default Dice
