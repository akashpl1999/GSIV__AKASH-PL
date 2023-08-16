import { createStore, combineReducers } from 'redux';
import searchReducer from './reducer';

const rootReducer = combineReducers({
 
    search: searchReducer,

});

const store = createStore(rootReducer);
export default store;
