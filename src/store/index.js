import React from 'react';
import { render } from 'react-dom';

import App from './container/FormContainer'
import './index.css'

console.log("testGUI is called")
render(<App />, document.getElementById('root'));
