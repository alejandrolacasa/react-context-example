import React from 'react';
import ReactDOM from 'react-dom';
import { StateInspector } from 'reinspect';

import App from './App';

import './index.css';

ReactDOM.render(
  <StateInspector name="Todos">
    <App />
  </StateInspector>,
  document.getElementById('root'),
);
