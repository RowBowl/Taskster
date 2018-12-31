import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Goal from './components/goal';
import Top from './components/top'
//ReactDOM.render(<Goal />, document.getElementById('root'));
ReactDOM.render(<Top />, document.getElementById('root'));
ReactDOM.render(<Goal />, document.getElementById('task-to-do'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
