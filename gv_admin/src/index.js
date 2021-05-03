import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-globally'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const initialState = {
  counter: 0,
  sdt: '',
}

ReactDOM.render(
    <Provider globalState={initialState}>
		<App />
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
