import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppComponent/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();