import { GET_PROVIDERS } from "./providerTypes";
import axios from 'axios';

export const getProviders=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Provider/getAllProviders")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_PROVIDERS,
            payload:{
                provider:response.data
            }
               });
      });
    }
}

export const addProvider=(newProvider)=>dispatch=>{
    axios.post("http://localhost:3001/Provider/addProvider",newProvider)
    .then(res=>dispatch(getProviders()))
     .then(res =>alert("provider added"))
    .catch(err=>console.log(err))
}

export const deleteProvider=(id)=>dispatch=>{
    axios.delete(`http://localhost:3001/Provider/deleteProvider/${id}`)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}
/*
export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}*/