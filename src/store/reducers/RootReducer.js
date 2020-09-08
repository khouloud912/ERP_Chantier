import {combineReducers} from 'redux';
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
    cartState:cartReducer

})
export default rootReducer;

