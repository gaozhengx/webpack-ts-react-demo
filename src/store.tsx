import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Istate } from './reducers/mainReducer';

export interface storeState {
    mainReducer: Istate
}

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;