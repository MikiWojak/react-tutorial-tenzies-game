import React from 'react';

const Dice = (props) => {
    const { value } = props

    return (
        <div className="dice">
            {value}
        </div>
    )
}

export default Dice