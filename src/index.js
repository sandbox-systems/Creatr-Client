import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter store={store}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
