import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {getAbscences,deleteAbscence} from '../../store/actions/abscence/abscenceActions';
import {getEmployees} from '../../store/actions/employee/employeeActions';
import {connect} from 'react-redux';
import Select from "react-select";
import moment from 'moment';

const Abscence = (props) => {
  const [data, setData] = useState([]);  
  const [Employees, setEmployees] = useState([]); 
  const [chaine, setChaine] = useState("");
  const [condition, setCondition] = useState(false);
  const [SearchResults,setSearchResults] =useState([]);
  const [oneEmployee, setoneEmployee] = useState([]); 
  const [filterOptionName, setFilterOptionName] = useState("");
  const [filterOptionLeave, setFilterOptionLeave] = useState("");
  const [filterOptionStartDate, setFilterOptionStartDate] = useState("");
  const [filterOptionFinalDate, setFilterOptionFinalDate] = useState("");

  const [leave,setLeave]=useState([
    { label: "Annual leave", value: "Annual leave" },
    { label: "personnal leave", value: "personnal leave" },
    { label: "Compassionate leave", value: "Compassionate leave" },
    { label: "Parental leave", value: "Parental leave" }
  ]); 
    useEffect(() => { 
      console.log(props)
      props.getAbscences();
      props.getEmployees();
  setData(props.AbscenceProps.abscences);
  setSearchResults(props.AbscenceProps.abscences);
  console.log(props.EmployeeProps.employees);

  setEmployees(props.EmployeeProps.employees.map( option => ({ value: option.id, label: option.last_name+' '+ option.first_name })))

}, []); 

    const handleSearch=()=>{
    console.log(filterOptionName)
    if( filterOptionName !== "" ||  filterOptionStartDate !=="" || filterOptionLeave !="" || filterOptionFinalDate !=""  ){
      const results = data.filter(person =>(

        //const z= new Date(person.start_date)
        //const d= new Date(filterOptionStartDate);
     //   console.log(moment(person.start_date).format("DD-MM-YYYY"))
       // const x= moment(person.start_date).format("DD-MM-YYYY");
      
    //  (filterOptionStartDate !="" && new Date(person.start_date) === new Date(filterOptionStartDate)) ||
//( filterOptionName  && person.employeeId == filterOptionName) ||
      ( filterOptionName !=="" && person.employeeId === filterOptionName) &&
      ( filterOptionLeave !=="" && person.type_of_leave === filterOptionLeave )
      &&  (filterOptionStartDate !=="" && +(new Date(person.start_date)) === +( new Date(filterOptionStartDate)))
  //  &&  (filterOptionFinalDate !="" && +(new Date(person.return_date)) === +( new Date(filterOptionFinalDate)))
     
        //moment(person.start_date).format("DD-MM-YYYY").toString().toLowerCase().includes(filterOptionStartDate);
      )); 
      console.log("results",results)
      setSearchResults(results);
      }else{
        setSearchResults(props.AbscenceProps.abscences);
      }
  }
const handleChangeName = (value) => {
  console.log(value)
  setFilterOptionName(value);
};
const handleChangeLeave = value => {
  setFilterOptionLeave(value);
};

const onChangeStartDate=(e)=>{
  console.log(e.target.value);
  setFilterOptionStartDate(e.target.value)
}
const onChangeLeaveDate=(e)=>{
  console.log(e.target.value);
  setFilterOptionFinalDate(e.target.value)
}

const getName=(id)=> {
   let label="";
  Employees.map((item)=>{
    if(item.value == id){
      console.log("id", id ,"And item.value", item.value ,"label", item.label)
       label= item.label
    }
  })
  return label
}

  const AddLeave=()=>{
    props.history.push('/addAbscence');
  }
  const EditAbscence=(id)=>{
    props.history.push('/editAbscence/'+id);
  }
  return (  
    <div className="container-fluid page-body-wrapper">
    <div class="row row-offcanvas row-offcanvas-right">
    <div class="content-wrapper" style={{backgroundColor: "white"}}>
    
    <div style={{ marginTop: "4%" , marginLeft:"24%" , width:"1000px"}}>
      
    {/* Page Cotent */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Leaves</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="https://dreamguys.co.in/smarthr/light/index.html">Dashboard</a></li>
              <li className="breadcrumb-item active">Leaves</li>
            </ul>
          </div>
          {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&
          <div className="col-auto float-right ml-auto">
            <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_leave" onClick={AddLeave}><i className="fa fa-plus" /> Add Leave</a>
          </div>
         }
        </div>
      </div>
      {/* /Page Header */}
      {/* Leave Statistics */}
      <div className="row">
        <div className="col-md-3">
          <div className="stats-info">
            <h6>Today Presents</h6>
            <h4>12 / 60</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-info">
            <h6>Planned Leaves</h6>
            <h4>8 <span>Today</span></h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-info">
            <h6>Unplanned Leaves</h6>
            <h4>0 <span>Today</span></h4>
          </div>
        </div>
      </div>
      {/* /Leave Statistics */}
      {/* Search Filter */}
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <div className="form-group form-focus">
          <Select options={Employees} 
            value={filterOptionName}
            onChange={e =>{
              console.log(e)
              handleChangeName(e.value)
            }}        
          />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <div className="form-group form-focus select-focus">
          <Select options={leave} 
            value={filterOptionLeave}
            onChange={e =>{
              console.log(e)
              handleChangeLeave(e.value)
            }}        
          />
            <label className="focus-label">Leave Type</label>
          </div>
        </div>    
        <div className="col-sm-6 col-md-3 col-lg-4 col-xl-2 col-12">  
          <div className="form-group form-focus">
              <input className="form-control floating datetimepicker" type="date"
              onChange={(e)=>onChangeStartDate(e)}               
              />
            <label className="focus-label">From</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-4 col-xl-2 col-12">  
          <div className="form-group form-focus">
              <input className="form-control floating datetimepicker" type="date"
              dateFormat="DD-MM-YYYY"
              onChange={(e)=>onChangeLeaveDate(e)}               

              />    
            <label className="focus-label">To</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-1 col-xl-2 col-12">  
          <a href="#" className="btn btn-success btn-block" onClick={()=>handleSearch()}>Search</a>  
        </div>     
      </div>
      {/* /Search Filter */}
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-striped custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>leave_remaining</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>

              {SearchResults.map((Abscence) =>(
                  <tr>
                  <td>
                    <h2 className="table-avatar">
                    <a href="#">{getName(Abscence.employeeId)} <span>{oneEmployee.current_position}</span></a>
                    </h2>
                  </td>
                  <td>{Abscence.type_of_leave}</td>
                  <td>{moment(Abscence.start_date).format("DD-MM-YYYY")}</td>
                  <td>{moment(Abscence.return_date).format("DD-MM-YYYY")}</td>
                  <td>{Abscence.leave_remaining}</td>
                  <td>
                  {props.AuthProps.user.roles.includes("ROLE_RHUSER") &&

                  <span class="table-remove">
                <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0" onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                props.deleteAbscence(Abscence.id) }>Remove</button>
                <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={() =>EditAbscence(Abscence.id)}>edit </button>
                  </span>
}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* Add Leave Modal */}    
  </div> 
  </div></div></div>         

  );
}
 
const mapStateToProps=(state)=>({
  AbscenceProps :state.AbscenceState,
  EmployeeProps :state.EmployeeState,
  AuthProps :state.AuthState,


  })
  
  export default connect(mapStateToProps, {getAbscences,deleteAbscence,getEmployees})(Abscence)
  