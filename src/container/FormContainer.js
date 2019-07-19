import React from 'react';
import RegistrationForm from '../component/EmployeeRegistration';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/reducers'

const store = createStore(rootReducer)

const App = () => {
    return (
        <Provider store={store}><RegistrationForm /></Provider>
    )     
}
console.log('redux store:', store.getState())
export default App; 