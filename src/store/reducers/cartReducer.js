
import { ADD_PRODUCT_CART ,GET_NUMBERS_PRODUCT } from "../actions/types";
const initialState={
    cartNumbers :  0
}
export default (state =initialState, action)=>{
    console.log(state,action)
    switch(action.type){
        case ADD_PRODUCT_CART:
            return {
                cartNumbers:state.cartNumbers +1,
                ...state}
            
        case GET_NUMBERS_PRODUCT:
            return {...state}
            default:
            return state;
    }
}