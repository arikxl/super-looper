import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import {padsReducer} from './reducers/padsReducers'

const rootReducer = combineReducers({
    padsModule: padsReducer,
});

export const store = createStore(rootReducer,
    compose(applyMiddleware(ReduxThunk))); //Passing the reducer
