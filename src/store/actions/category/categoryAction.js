import { GET_CATEGORY,DELETE_CATEGORY } from "./categoryTypes";
import axios from 'axios';

export const getCategories=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/categorie/getAllCategories")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_CATEGORY,
            payload:{
                categories:response.data
            }
               });
      });
    }
}

export const addCategory=(newCategory)=>dispatch=>{
    axios.post("http://localhost:3001/categorie/addCategorie",newCategory)
    .then(res=>dispatch(getCategories()))
    .catch(err=>console.log(err))
}
export const deleteCategory=(id)=>dispatch=>{
    console.log("let's begin")
    axios.delete(`http://localhost:3001/categorie/deleteCategorie/${id}`)
    .then(res=>dispatch(getCategories()))
    .catch(err=>console.log(err))
}
/*
export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}*/