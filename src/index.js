import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import '@/assets/styles/reset.css'

import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById("root")
)
