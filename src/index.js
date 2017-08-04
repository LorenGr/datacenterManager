import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reducers/index';

//App Components
import DataCenter from './components/datacenter';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <DataCenter/>
    </Provider>,
    document.getElementById('datacenter_container')
);