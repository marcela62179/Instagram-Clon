import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './scss/main.scss';
import 'bulma-helpers/css/bulma-helpers.min.css'
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import 'bulma-extensions/dist/js/bulma-extensions.min.js'

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>

    ,
    document.getElementById('root')
);

serviceWorker.unregister();
