import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import './index.css';
import store from './state/state';

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
