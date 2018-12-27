import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

//Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import App from './App';
import './index.css';

const Root = () => {
    return (
        <Provider store={configureStore()}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));