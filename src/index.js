import ReactDOM from 'react-dom';

//Redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './reducers/index';

//App Components
import Datacenter from './components/datacenter';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(routerMiddleware(browserHistory))
));

ReactDOM.render(
    <Provider store={store}>
        <Datacenter/>
    </Provider>,
    document.getElementById('datacenter_container')
);