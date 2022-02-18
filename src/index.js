import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {historyReducer} from './redux/historyReducer'

export const store = createStore(historyReducer, compose(
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const app =(
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>,document.getElementById('root'));

reportWebVitals();
