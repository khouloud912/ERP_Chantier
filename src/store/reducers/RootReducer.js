import {combineReducers} from 'redux';
import CartReducer from './cartReducer'
const rootReducer = combineReducers({
    cartState:CartReducer

})
export default rootReducer;

