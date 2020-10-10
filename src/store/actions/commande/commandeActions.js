import { GET_COMMNADES,ADD_COMMNADES ,GET_COMMNADESLIGNES } from "./commandeTypes";
import axios from 'axios';

export const getCommandes=()=> {
    console.log("getCommande")
    return function(dispatch) {
      return axios.get("http://localhost:3001/commande/getAllCommande")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_COMMNADES,
            payload:{
                commandes:response.data
            }
               });
      });
    }
}
export const addCommande=(newCommande)=>dispatch=>{
    console.log("newCommande", newCommande);
   return  axios.post("http://localhost:3001/commande/addCommande",newCommande)
    .then(res=>dispatch(getCommandes()))
     .then(res =>alert("commande added"))
    .catch(err=>console.log(err))
}

export const getCommandeLignes=(id)=> {
    return function(dispatch) {
      return axios.get(`http://localhost:3001/CommandeLigne/getDetailCommandLigne/${id}`)
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_COMMNADESLIGNES,
            payload:{
                commandeLignes:response.data
            }
               });
      });
    }
}

/***************************************************************************** Reception section */


export const addReception=(newReception)=>dispatch=>{
    console.log("newCommande", newReception);
   return  axios.post("http://localhost:3001/Reception/addReception",newReception)
     .then(res =>alert("Reception added"))
    .catch(err=>console.log(err))
}