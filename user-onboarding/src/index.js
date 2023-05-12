import React from 'react';
// import ReactDOM from 'react-dom/client';
import {render} from 'react-dom'
import './index.css';
import App from './components/App';
// import {worker} from './api-mocks/browser'
// worker.start();

render(
  <>
    <App />
  </>
  , document.querySelector('#root')
)