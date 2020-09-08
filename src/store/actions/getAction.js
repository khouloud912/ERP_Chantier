import {GET_NUMBERS_PRODUCT,GET_CART} from './types';

export const getNumbers =()=>{
    return (dispatch)=>{
        console.log("getting numbers of added products");
        dispatch({
            type:GET_NUMBERS_PRODUCT        
        })
    }
}
export const getCart =()=>{
    return (dispatch)=>{
        console.log("getting cart");
        dispatch({
            type:GET_CART      
        })
    }
}