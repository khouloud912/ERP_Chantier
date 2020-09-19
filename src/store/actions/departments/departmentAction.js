import { GET_DEPARTMENTS } from "./departmentTypes";
import axios from 'axios';

export const getDepartment=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Departement/getAlldepartement")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_DEPARTMENTS,
            payload:{
                departments:response.data
            }
               });
      });
    }
}

export const addDepartment=(newDepartment)=>dispatch=>{
    axios.post("http://localhost:3001/Departement/addDepartement",newDepartment)
    .then(res=>dispatch(getDepartment()))
    // .then(res =>alert("user added"))
    .catch(err=>console.log(err))
}
export const deleteDepartment=(id)=>dispatch=>{
    console.log("let's begin")
    axios.delete(`http://localhost:3001/Departement/deleteDepartement/${id}`)
    .then(res=>dispatch(getDepartment()))
    .catch(err=>console.log(err))
}

export const putDepartment=(id,updatedDepartment)=>dispatch=>{
    axios.put(`http://localhost:3001/Departement/UpdateDepartement/${id}`,updatedDepartment)
    .then(res=>dispatch(getDepartment()))
    .then(res=>alert("updated successfully"))
    .catch(err=>console.log(err))
}