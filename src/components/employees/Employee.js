import React, { Component } from 'react'
import AddEmployee from './AddEmployee';
import axios from 'axios';
export default class Employee extends Component {  
  constructor() {
    super();
    this.state = {
      AllEmployees:[{}],
      showcurrentComponent:true  ,
      addemployee:false,
      modifyemployee:true,
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  componentDidMount() {
    return axios.get("http://localhost:3001/Employee/getAllEmployee").then((response)=>{
      console.log(response.data);
      this.setState({
        AllEmployees:response.data
      })
    })
  }
  deleteRow(id, e){
    axios.delete(`http://localhost:3001/Employee/deleteEmployee/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("deleted successfully")
      })
    }
    passToDetailList(id) {
      this.props.history.push('/detailsEmployee/'+id)
      console.log(id);
 }
 passToAddEmployee() {
  this.props.history.push('/addEmployee');
}
EditEmployee(id){
  this.props.history.push('/modifyEmployee/'+id);
}
  render() {
    return (   
      <div > 
<div class="card" style={{ marginTop: "4%" , marginLeft:"24%" , width:"1000px"}}>
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4"  >Employees</h3>
<div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
            class="fas fa-plus fa-2x" aria-hidden="true" onClick={() => this.passToAddEmployee()}></i></a></span>
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
        {this.state.AllEmployees.map((employee) =>(
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
                this.deleteRow(employee.id, e)} >Remove</button>
              <button type="button" class="btn btn-info btn-rounded btn-sm my-0"  onClick={() =>this.EditEmployee(employee.id)}>edit </button>
              <button type="button" class="btn btn-primary btn-rounded btn-sm my-0" onClick={() => this.passToDetailList(employee.id)}>details </button>
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
</div>
    )
  }
}