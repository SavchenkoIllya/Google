import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore} from "redux";
import {rootReducer} from './redux/rootReducer';
import {Provider} from 'react-redux';

export const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

const app =(
  <Provider store={store}>
    <App></App>
  </Provider>
)

ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>, document.getElementById('root'));

reportWebVitals();
