import { useState } from 'react';
import './Counter.css';

function Counter() {
    let [x, setX] = useState(0);
    return (
        <div className="cmain">
            <h1 className="counter-highlight">{x}</h1>
            <div className="btn-div">
                <button className="btn" onClick={() => setX(x += 1)}>Increament</button>
                <button className="btn" onClick={() => setX(x -= 1)}>decrement</button>
            </div>
        </div>);
}
export default Counter;