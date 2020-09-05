import {GET_NUMBERS_PRODUCT} from './types';

export const getNumbers =()=>{
    return (dispatch)=>{
        console.log("getting numbers of added products");
        dispatch({
            type:GET_NUMBERS_PRODUCT        
        })
    }
}