import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/shop';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import Autoshops from './components/autoshops';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Autoshops />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
