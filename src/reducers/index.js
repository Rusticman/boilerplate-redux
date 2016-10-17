import { combineReducers } from 'redux';
import fbReducer from './fb_reducer';


const rootReducer = combineReducers({
fb:fbReducer
});

export default rootReducer;
