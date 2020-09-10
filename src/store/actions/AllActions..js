import {ADD_PRODUCT_CART ,GET_ARTICLES, REMOVE_FROM_CART, ADJUST_ITEM_QTY} from './types';
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
    return function(dispatch) {
      return axios.get("http://localhost:3001/Article/getAllArticles")
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