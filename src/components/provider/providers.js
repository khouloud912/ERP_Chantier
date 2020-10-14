import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {getProviders,deleteProvider} from '../../store/actions/provider/providerActions';
import {connect} from 'react-redux';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

import moment from 'moment';

const Providers = (props) => {
    const [data, setData] = useState([]);  
    const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

useEffect(() => { 
  props.getProviders();
  setData(props.providerProps.providers)
  console.log(searchTerm)
  if( searchTerm !== ""){
  const results = data.filter(person =>
    (person.Name?person.Name:'').toLowerCase().includes(searchTerm) ||
    (person.Adress?person.Adress:'').toLowerCase().includes(searchTerm) ||
    (person.email?person.email:'').toLowerCase().includes(searchTerm)
   
  ); 
  console.log("results",results)
  setSearchResults(results);
  }else{
    setSearchResults(props.providerProps.providers);
  }
}, [searchTerm]); 
const AddProvider =()=>{
  props.history.push('/AddProvider')  ;
}
    return (  
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"22%" }}> 
        
        <div class="card" style={{  width:"1000px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4"  >Providers</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
              <span class="table-add float-right mb-3 mr-2">
              <MDBCol>
                <MDBFormInline className="md-form mr-auto mb-4">
                 <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
                  value={searchTerm}
                  onChange={handleChange}
                 />
                {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")&&
                <a href="#!" class="text-success">  <i class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddProvider}></i></a>
               }
                 </MDBFormInline>
                </MDBCol>   
                </span> 
              
              <table class="table table-bordered table-responsive-md table-striped text-center">
              <div>
                <thead>
                  <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">email </th>
                    <th class="text-center">phone </th>
                    <th class="text-center">city </th>
                    <th class="text-center">Adress</th>
                  </tr>
                </thead>
                <tbody>
                {searchResults.map((item) =>(
                  <tr key={item.id}>
                <td class="pt-3-half" contenteditable="true">{item.Name}</td>
                <td class="pt-3-half" contenteditable="true">{item.email}</td>
                <td class="pt-3-half" contenteditable="true">{item.phone}</td>
                <td class="pt-3-half" contenteditable="true">{item.city}</td>
                <td class="pt-3-half" contenteditable="true">{item.Adress}</td>
                    <td>
                    {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")&&
                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                      props.deleteProvider(item.id)} 
                         >Remove</button>
                      <button type="button" class="btn btn-info btn-rounded btn-sm my-0" >edit </button>
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
  providerProps :state.providerState,
  AuthProps :state.AuthState,

  })
  
  export default connect(mapStateToProps, {getProviders,deleteProvider})(Providers)
  