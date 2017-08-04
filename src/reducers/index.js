import {combineReducers} from 'redux';
import datacenter from './datacenter';

export const reducers = combineReducers({
    datacenter: datacenter
});