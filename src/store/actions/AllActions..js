import {ADD_PRODUCT_CART , REMOVE_FROM_CART, ADJUST_ITEM_QTY ,INCREASE_QUANTITY ,DECREASE_QUANTITY} from './types';
import axios from'axios';

export const addCart =(id , Articles)=>{
    return function (dispatch) {
        console.log('adding to cart'); 
        console.log("ArticleId :", id ,"Articles :", Articles)
      return  dispatch({
          
             type:ADD_PRODUCT_CART,
             payload:{
                 id:id,
                 Articles:Articles
             }
        }) }}
export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
          },
        };
      };

export const ProductQuantity = (action,id) => {
  console.log("we are in actions now")
  return {
      type: action === "increase" ? INCREASE_QUANTITY :DECREASE_QUANTITY,
      payload: {
          id: id,
        },
      };
    };


export const adjustItemQty = (itemID, qty) => {
    return {
          type: ADJUST_ITEM_QTY,
          payload: {
            id: itemID,
            qty,
          },
        };
      };





  /*
export const fetchArticleDetails=()=> {
  console.log("koki")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Provider/getAllProviders")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_ARTICLES,
            payload:{
                data:response.data
            }  
               });
      });
    };
  }*/