import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import {store,  persistedStore} from './store/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={ persistedStore}>
    <App/>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
