import { ADD_PRODUCT_CART ,GET_NUMBERS_PRODUCT ,ADJUST_ITEM_QTY,REMOVE_FROM_CART ,GET_CART ,INCREASE_QUANTITY ,DECREASE_QUANTITY} from "../actions/types";
import Articles from "../../components/articles/Articles";
import { act } from "react-dom/test-utils";
const initialState={
    cartNumbers : 0,
    products:[{}],
    cart:[],
    articles:[{}]
}
const cartReducer = (state = initialState, action) => {
    // console.log(state,action)
    switch(action.type){
        case ADD_PRODUCT_CART:
             state.products=action.payload.Articles;
             console.log(state.products);
             const item = state.products.find(
                (product) => product.id === action.payload.id
              );
              //item.quantity +=1;
              console.log("item :",item);

        const inCart = state.cart.find((item)=>item.id === action.payload.id );
        if(!inCart){
            console.log("null")
        }
      return {
                ...state,
              //  cartNumbers:state.cartNumbers + 1,
                products:{
                    ...state.products,
                },
                cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                      ? { ...item ,quantity:item.quantity+1}
                      : item
                  )
                : [...state.cart, { ...item ,quantity:item.quantity+1 }],
                }
                
        case GET_NUMBERS_PRODUCT:
            return {...state,
            }
        case GET_CART:
            return {
                ...state,
                cart:state.cart
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter(item=>item.id !== action.payload.id)
            }
        case ADJUST_ITEM_QTY:
            return {
                ...state,
                cart:state.cart.map(item=>item.id === action.payload.id ?{...item,quantity:+action.payload.qty}:item )
            }
            default: 
            return state
    }
}
export default cartReducer;
