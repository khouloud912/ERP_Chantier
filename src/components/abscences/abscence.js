import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {getAbscences,deleteAbscence} from '../../store/actions/abscence/abscenceActions';
import {connect} from 'react-redux';

const Abscence = (props) => {
  const [data, setData] = useState([]);  
  const [oneEmployee, setoneEmployee] = useState([]);  

    useEffect(() => { 
      console.log(props)
      props.getAbscences();
  setData(props.AbscenceProps.abscences)
}, []); 

const getName=(id)=> {
  axios.get('http://localhost:3001/Employee/getEmployee/'+id).then((response)=>{
//  console.log(response.data);
   setoneEmployee(response.data)
   console.log(oneEmployee);
})
}
  const AddLeave=()=>{
    props.history.push('/addAbscence');
  }
  const EditAbscence=(id)=>{
    props.history.push('/editAbscence/'+id);
  }

  return (  
    <div style={{ marginTop: "4%" , marginLeft:"24%" , width:"1000px"}}>
    {/* Page Content */}
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
          <div className="col-auto float-right ml-auto">
            <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_leave" onClick={AddLeave}><i className="fa fa-plus" /> Add Leave</a>
          </div>
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
            <input type="text" className="form-control floating" />
            <label className="focus-label">Employee Name</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <div className="form-group form-focus select-focus">
            <select className="select floating"> 
              <option> -- Select -- </option>
              <option>Casual Leave</option>
              <option>Medical Leave</option>
              <option>Loss of Pay</option>
            </select>
            <label className="focus-label">Leave Type</label>
          </div>
        </div>    
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <div className="form-group form-focus">
            <div className="cal-icon">
              <input className="form-control floating datetimepicker" type="text" />
            </div>
            <label className="focus-label">From</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <div className="form-group form-focus">
            <div className="cal-icon">
              <input className="form-control floating datetimepicker" type="text" />
            </div>
            <label className="focus-label">To</label>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
          <a href="#" className="btn btn-success btn-block">Search</a>  
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
              {data.map((Abscence) =>(
                  <tr>
                  <td>
                  {getName(Abscence.employeeId)}   
                    <h2 className="table-avatar">
              <a href="#">{oneEmployee.last_name} {oneEmployee.first_name} <span>{oneEmployee.current_position}</span></a>
                    </h2>
                  </td>
                  <td>{Abscence.type_of_leave}</td>
                  <td>{Abscence.start_date}</td>
                  <td>{Abscence.return_date}</td>
                  <td>{Abscence.leave_remaining}</td>
                  <td>
                  <span class="table-remove">
                <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0" onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                props.deleteAbscence(Abscence.id) }>Remove</button>
                <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={() =>EditAbscence(Abscence.id)}>edit </button>
                  </span>
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

  );
}
 
const mapStateToProps=(state)=>({
  AbscenceProps :state.AbscenceState
  })
  
  export default connect(mapStateToProps, {getAbscences,deleteAbscence})(Abscence)
  