import React, { Component } from 'react';
import axios from 'axios';
export default class Department extends Component {
  constructor() {
    super();
    this.state = {
      AllDepartment:[{}],
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  componentDidMount() {
    return axios.get("http://localhost:3001/Departement/getAlldepartement").then((response)=>{
      console.log(response.data);
      this.setState({
        AllDepartment:response.data
      })
    })
  }
  deleteRow(id, e){
    axios.delete("http://localhost:3001/Departement/deleteDepartement/"+id)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("deleted successfully")
      })
    }
    EditDepartment(id){
      this.props.history.push('/editDepartment/'+id);
    }
  AddEmployee(){
    this.props.history.push('/addDepartment');
  }
  render() {
    return (
      <div>
  <div class="card" style={{ marginTop: "4%" , marginLeft:"24%" , width:"1000px"}}>
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Departments</h3>
  <div class="card-body">
      <div id="table" class="table-editable">
        <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
              class="fas fa-plus fa-2x" aria-hidden="true" onClick={() => this.AddEmployee()}></i></a></span>
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
          {this.state.AllDepartment.map((department) =>(
            <tr>
          <td class="pt-3-half" contenteditable="true">{department.departement_name}</td>
          <td class="pt-3-half" contenteditable="true">{department.sub_departement}</td>
          <td class="pt-3-half" contenteditable="true">{department.main_operation}</td>
          <td class="pt-3-half" contenteditable="true">{department.departement_status}</td>
          <td class="pt-3-half" contenteditable="true">{department.description}</td>
              <td>
                <span class="table-remove">
                  <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                this.deleteRow(department.id, e)} 
                   >Remove</button>
                <button type="button" class="btn btn-info btn-rounded btn-sm my-0" onClick={() =>this.EditDepartment(department.id)} >edit </button>
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
