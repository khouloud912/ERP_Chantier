import { GET_ABSCENCE } from "./abscenceType";
import axios from 'axios';

export const getAbscences=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Abscence/getAllAbscence")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_ABSCENCE,
            payload:{
                abscences:response.data
            }
               });
      });
    }
}
/*
export const getEmployees=()=>dispatch=>{
    console.log("koki");
    return axios.get("http://localhost:3001/Employee/getAllEmployee")
    .then((res)=>{
    console.log("ahwama el employees")
    dispatch({type:GET_EMPLOYEES,payload:{
       employees:res.data
    }
    })
    // .then(res=>console.log(res))
    .catch(err=>console.log(err))
})
}*/
export const addAbscence=(newAbscence)=>dispatch=>{
    axios.post("http://localhost:3001/Abscence/addAbscence",newAbscence)
    .then(res=>dispatch(getAbscences()))
     .then(res =>alert("Leave added"))
    .catch(err=>console.log(err))
}
export const deleteAbscence=(id)=>dispatch=>{
    axios.delete(`http://localhost:3001/Abscence/deleteAbscence/${id}`)
    .then(res=>dispatch(getAbscences()))
    .catch(err=>console.log(err))
}
/*
export const putContact=(id,updatedContact)=>dispatch=>{
    axios.put(`http://localhost:5000/contacts/${id}`,updatedContact)
    .then(res=>dispatch(getProviders()))
    .catch(err=>console.log(err))
}*/