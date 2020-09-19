import axios from 'axios';
import React, { useState,useEffect } from 'react';

import {getEmployees,deleteEmployee} from '../../store/actions/employee/employeeActions';
import {connect} from 'react-redux';


const Employee = (props) => {
  const [data, setData] = useState([]);  
    useEffect(() => { 
      console.log(props)
      props.getEmployees();
  setData(props.EmployeeProps.employees)
}, []); 
const passToAddEmployee =()=>{
  props.history.push('/addEmployee');
}
const passToDetailList=(id)=> {
  props.history.push('/detailsEmployee/'+id)
  console.log(id);
}
const EditEmployee=(id)=>{
  props.history.push('/modifyEmployee/'+id);
}
 return ( 
    <div class="card" style={{ marginTop: "4%" , marginLeft:"24%" , width:"1000px"}}>
      <h3 class="card-header text-center font-weight-bold text-uppercase py-4"  >Employees </h3>
    <div class="card-body">
        <div id="table" class="table-editable">
          <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                class="fas fa-plus fa-2x" aria-hidden="true" onClick={passToAddEmployee}></i></a></span>
          <table class="table table-bordered table-responsive-md table-striped text-center">
          <div>
            <thead>
              <tr>
                <th class="text-center">first name</th>
                <th class="text-center">last name </th>
                <th class="text-center">gender</th>
                <th class="text-center">current position </th>
                <th class="text-center">office</th>
                <th class="text-center">department</th>
                <th class="text-center">actions</th>
              </tr>
            </thead>
            <tbody>
            {data.map((employee) =>(
              <tr>
            <td class="pt-3-half" contenteditable="true">{employee.last_name}</td>
                <td class="pt-3-half" contenteditable="true">{employee.first_name}</td>
                <td class="pt-3-half" contenteditable="true">{employee.gender}</td>
                <td class="pt-3-half" contenteditable="true">{employee.current_position}</td>
                <td class="pt-3-half" contenteditable="true">{employee.office}</td>
                <td class="pt-3-half" contenteditable="true"></td>          
                <td>
                  <span class="table-remove">
                    <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0" onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                    props.deleteEmployee(employee.id)} >Remove</button>
                  <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={()=>EditEmployee(employee.id)}  >edit </button>
                  <button type="button" class="btn btn-primary btn-rounded btn-sm my-0" onClick={()=>passToDetailList(employee.id)}>details </button>
                      </span>
                </td>
              </tr>
              ))}
            </tbody>
            </div>
          </table>
        </div>
      </div> 
    </div>
   );
}
 
const mapStateToProps=(state)=>({
  EmployeeProps :state.EmployeeState
  })
export default connect(mapStateToProps, {getEmployees,deleteEmployee})(Employee)