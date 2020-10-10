import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {getEmployees,deleteEmployee} from '../../store/actions/employee/employeeActions';
import {connect} from 'react-redux';


const Employee = (props) => {
  const [data, setData] = useState([]);  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

    useEffect(() => { 
      console.log(props)
      props.getEmployees();
  setData(props.EmployeeProps.employees) 
  console.log(searchTerm)
  if( searchTerm !== ""){
  const results = data.filter(person =>
    person.last_name.toLowerCase().includes(searchTerm) ||
    person.first_name.toLowerCase().includes(searchTerm) ||
    person.gender.toLowerCase().includes(searchTerm) 
  ); 
  setSearchResults(results);
  }else{
    setSearchResults(props.EmployeeProps.employees);
  }
}, [searchTerm]); 

const handleChange = event => {
  setSearchTerm(event.target.value);
};
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
  <div classNameNameName="container-fluid page-body-wrapper">
  <div className="row row-offcanvas row-offcanvas-right">
  <div className="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"20%" }}> 
    <div className="card" style={{ width:"1000px"}}>
      <h3 className="card-header text-center font-weight-bold text-uppercase py-4"  >Employees </h3>
    <div className="card-body">
        <div id="table" className="table-editable">    
           <span className="table-add float-right mb-3 mr-2">
              <MDBCol>
                <MDBFormInline classNameName="md-form mr-auto mb-4">
                 <input classNameName="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
                  value={searchTerm}
                  onChange={handleChange}
                 />
                {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&
                 <a href="#!" className="text-success"><i
                className="fas fa-plus fa-2x" aria-hidden="true" onClick={passToAddEmployee}></i></a>
                }
                 </MDBFormInline>
                </MDBCol>    
          </span>
            
          <table className="table table-bordered table-responsive-md table-striped text-center">
          <div>
            <thead>
              <tr>
                <th className="text-center">first name</th>
                <th className="text-center">last name </th>
                <th className="text-center">gender</th>
                <th className="text-center">current position </th>
                <th className="text-center">office</th>
                <th className="text-center">department</th>
                <th className="text-center">actions</th>
              </tr>
            </thead>
            <tbody>
            {searchResults.map((employee) =>(
              <tr>
            <td className="pt-3-half" contenteditable="true">{employee.first_name}</td>
                <td className="pt-3-half" contenteditable="true"> {employee.last_name}</td>
                <td className="pt-3-half" contenteditable="true">{employee.gender}</td>
                <td className="pt-3-half" contenteditable="true">{employee.current_position}</td>
                <td className="pt-3-half" contenteditable="true">{employee.office}</td>
                <td className="pt-3-half" contenteditable="true"></td>          
                <td>
                {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&
                  <span className="table-remove">
                    <button type="button"  className="btn btn-danger btn-rounded btn-sm my-0" onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                    props.deleteEmployee(employee.id)} >Remove</button>
                  <button type="button" className="btn btn-info btn-rounded btn-sm my-0" onClick={()=>EditEmployee(employee.id)}  >edit </button>
                  <button type="button" className="btn btn-primary btn-rounded btn-sm my-0" onClick={()=>passToDetailList(employee.id)}>details </button>
                      </span>
}
                </td>
              </tr>
              ))}
            </tbody>
            </div>
          </table>
        </div>
      </div> 
    </div></div></div></div>
   );
}
 
const mapStateToProps=(state)=>({
  EmployeeProps :state.EmployeeState,
  AuthProps :state.AuthState,

  })
export default connect(mapStateToProps, {getEmployees,deleteEmployee})(Employee)




















