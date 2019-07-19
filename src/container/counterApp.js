import React from 'react';
import Counter from '../component/Counter.jsx.js';
import { createStore } from 'redux';
import { provider } from 'react-redux'

import '../css/counterApp.css';


const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default :
            return state            
    };
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' })


const Counterapp = () => {
    return (
        <provider store={store}>
        <Counter />
        </provider>    
    );
}

export default Counterapp;