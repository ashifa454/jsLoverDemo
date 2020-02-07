import React, { useState } from 'react';
import Container from '../components/container';
function FunctionalComponent() {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }
    return (<Container>
        <h3>Functional Component </h3>
        {counter}
        <div className="actions">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </Container>);
}
export default FunctionalComponent;