import React, { useState,useEffect } from 'react';
import {getDepartment,deleteDepartment} from '../../store/actions/departments/departmentAction';
import {connect} from 'react-redux';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";



const Department = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);  
  useEffect(() => { 
    props.getDepartment();
    console.log(props.departmentProps.departments)
    setData(props.departmentProps.departments)
    console.log(searchTerm)
  if( searchTerm !== ""){
  const results = data.filter(department =>
    department.departement_name.toLowerCase().includes(searchTerm) ||
    department.sub_departement.toLowerCase().includes(searchTerm) 
  ); 
  setSearchResults(results);
  }else{
    setSearchResults(props.departmentProps.departments);
  }
  }, [searchTerm]); 
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const AddDepartment =()=>{
    props.history.push('/addDepartment');  }
  const EditDepartment=(id)=>{
    props.history.push('/editDepartment/'+id);
  }
  
  return (
    <div className="container-fluid page-body-wrapper">
    <div class="row row-offcanvas row-offcanvas-right">
    <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"20%" }}>  
    
  <div class="card" style={{  width:"1000px"}}>
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Departments</h3>
  <div class="card-body">
      <div id="table" class="table-editable">
        <span class="table-add float-right mb-3 mr-2">
        <MDBCol>
                <MDBFormInline className="md-form mr-auto mb-4">
                 <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
                  value={searchTerm}
                  onChange={handleChange}
                 />
                {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&
                  <a href="#!" class="text-success">
                    <i class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddDepartment}></i></a>   
                  }
                 </MDBFormInline>
                </MDBCol>    
        </span>
        <table class="table table-bordered table-responsive-md table-striped text-center">
        <div>
          <thead>
            <tr>
              <th class="text-center">Department </th>
              <th class="text-center">Sub Department </th>
              <th class="text-center">Main Opertain</th>
              <th class="text-center">status</th>
              <th class="text-center">Description Department</th>
              <th class="text-center">actions</th>
            </tr>
          </thead>
          <tbody>
          {searchResults.map((department) =>(
            <tr>
          <td class="pt-3-half" contenteditable="true">{department.departement_name}</td>
          <td class="pt-3-half" contenteditable="true">{department.sub_departement}</td>
          <td class="pt-3-half" contenteditable="true">{department.main_operation}</td>
          <td class="pt-3-half" contenteditable="true">{department.departement_status}</td>
          <td class="pt-3-half" contenteditable="true">{department.description}</td>
              <td>
              {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&
                <span class="table-remove">
                  <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                props.deleteDepartment(department.id)} 
                   >Remove</button>
                <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={() =>EditDepartment(department.id)} >edit </button>
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
  </div>
  </div></div></div>
   );
}
 
const mapStateToProps=(state)=>({
  departmentProps :state.DepartmentState,
  AuthProps :state.AuthState,

  }) 
  export default connect(mapStateToProps, {getDepartment,deleteDepartment})(Department)
 