import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shops from './components/shop-list';
import registerServiceWorker from './registerServiceWorker';

const shops = [
    "Shop 1",
    "Shop 2",
    "Shop 3", 
    "Shop Blue"
]

ReactDOM.render(<Shops shops={shops}/>, document.getElementById('root'));
registerServiceWorker();
