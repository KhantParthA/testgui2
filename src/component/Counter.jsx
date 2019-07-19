import React, { useState } from 'react';
import { connect } from 'react-redux';
import { statement } from '@babel/template';

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div id="main">
            <h2>Counter</h2>
            <button onClick={() => setCount(count - 1)}>-</button><span id="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>    
    );
}

const mapStateToProps = () => {
    return {
        count: state.count 
    }
}

export default connect(mapStateToProps)(Counter)