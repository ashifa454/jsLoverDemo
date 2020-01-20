import React from 'react';
import './style.scss';

class CustomComponent extends React.Component {
    state = {
        counter: 0
    }
    handleIncrement = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    }
    handleDecrement = () => {
        const { counter } = this.state;
        this.setState({ counter: counter - 1 })
    }
    render() {
        const { counter } = this.state;
        return <div className="itemContainer">
            <h3>Basic Component </h3>
            <div>{counter}</div>
            <div className="actions">
                <button onClick={this.handleIncrement}>
                    Increment
            </button>
                <button onClick={this.handleDecrement}>
                    Decrement
            </button>
            </div></div>
    }
}
export default CustomComponent;