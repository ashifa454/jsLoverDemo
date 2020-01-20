import React, { useState } from 'react';

function FunctionalComponent() {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    return (<div className="itemContainer">
        <h3>Functional Component </h3>
        {counter}
        <div className="actions">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>);
}
export default FunctionalComponent;