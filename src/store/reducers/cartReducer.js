
import { ADD_PRODUCT_CART ,GET_NUMBERS_PRODUCT ,GET_ARTICLES} from "../actions/types";
const initialState={
    cartNumbers :  0,
    products:[]
}
export default (state =initialState, action)=>{
    console.log(state,action)
    switch(action.type){
        case GET_ARTICLES:
            return {
                products:action.payload.data
            }
        case ADD_PRODUCT_CART:
            return {
                ...state,
                cartNumbers:state.cartNumbers + 1,
                }
        case GET_NUMBERS_PRODUCT:
            return {...state}
            default:
            return state;
    }
}