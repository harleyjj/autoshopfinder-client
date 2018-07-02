import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/shop';
import thunk from 'redux-thunk';
import ShopList from './components/shop-list';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <ShopList />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
