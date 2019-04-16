import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import Badge from './component/Badge';
// import Badges from './pages/Badges'aaa;
// import BadgeNew from './pages/BadgeNew';
import App from './component/App';

const container = document.getElementById('app');

// // ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
