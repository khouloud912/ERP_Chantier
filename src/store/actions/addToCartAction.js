import {ADD_PRODUCT_CART ,GET_ARTICLES} from './types';
import axios from'axios';


export const addCart =()=>{
   return {
       type:ADD_PRODUCT_CART
   }
}
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
  }