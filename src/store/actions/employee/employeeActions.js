import { GET_EMPLOYEES } from "./employeeTypes";
import axios from 'axios';

export const getEmployees=()=> {
    console.log("hjkjkj")
    return function(dispatch) {
      return axios.get("http://localhost:3001/Employee/getAllEmployee")
        .then(( response ) => {
            console.log(response);
        dispatch({
            type:GET_EMPLOYEES,
            payload:{
                employees:response.data
            }
               });
      });
    }
}

export const addEmployee=(newEmployee)=>dispatch=>{
    axios.post("http://localhost:3001/Employee/addEmployee",newEmployee)
    .then(res=>dispatch(getEmployees()))
    .then(res =>alert("employee added"))
    .catch(err=>console.log(err))
}
export const deleteEmployee=(id)=>dispatch=>{
    console.log("let's begin")
    axios.delete(`http://localhost:3001/Employee/deleteEmployee/${id}`)
    .then(res=>dispatch(getEmployees()))

    .catch(err=>console.log(err))
}

export const putEmployee=(id,updatedEmployee)=>dispatch=>{
    axios.put(`http://localhost:3001/Employee/UpdateEmployee/${id}`,updatedEmployee)
    .then(res=>dispatch(getEmployees()))
    .catch(err=>console.log(err))
}