import React from 'react';

const Dice = (props) => {
    const { value } = props

    return (
        <div className="dice">
            <h2 className="dice-num">
                {value}
            </h2>
        </div>
    )
}

export default Dice