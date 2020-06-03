import React, { ReactElement, useState } from 'react';
import './Counter.scss';

export interface CounterProps {
    initialValue: number;
}

const Counter: React.FC<CounterProps> = 
    ({ initialValue }: CounterProps): ReactElement => {

    const [count, setCount] = useState<number>(initialValue);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="Counter">
            <button type="button" onClick={decrement}>-</button>
            <span>{count}</span>
            <button type="button" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
