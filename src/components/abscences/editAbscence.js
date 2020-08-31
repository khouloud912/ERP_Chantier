import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class addAbscence extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AllEmployees:[{}],
        type_of_leave:'',
        start_date:'',
        return_date:'',
        leave_remaining:'',
        EmployeeID:''
    };
    this.onChangeTypeofLeave = this.onChangeTypeofLeave.bind(this);
    this.onChangeStartDate= this.onChangeStartDate.bind(this);
    this.onChangeReturnDate = this.onChangeReturnDate.bind(this);
    this.onChangeleaveRemaining = this.onChangeleaveRemaining.bind(this);
    this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeTypeofLeave(e) {
    console.log(e.target.value);
    this.setState({ type_of_leave: e.target.value })
  }
  onChangeStartDate(e) {
    console.log(e.target.value);
    this.setState({ start_date: e.target.value })
  }
  onChangeReturnDate(e) {
    console.log(e.target.value);

    this.setState({ return_date: e.target.value })
  }
  onChangeleaveRemaining(e) {
    console.log(e.target.value);
    this.setState({ leave_remaining: e.target.value })
  }
  onChangeEmployeeID(e) {
    console.log(e.target.value);
    this.setState({ employeeId: e.target.value })
  }
   onSubmit(e) {
    e.preventDefault();
     const id = this.props.match.params.id;
     console.log(this.state.return_date);
     console.log(this.state.start_date);
     console.log(this.state.leave_remaining);
     console.log(this.state.type_of_leave);
     axios.put('http://localhost:3001/Abscence/UpdateAbscence/'+id, {
      type_of_leave: this.state.type_of_leave,
      start_date: this.state.start_date,
      return_date:this.state.return_date,
      leave_remaining:this.state.leave_remaining,
      employeeId:this.state.employeeId, 
     })
      .then((res) => {
          console.log(res.data)
          console.log("successfully updated")
      }).catch((error) => {
          console.log(error)
          console.log("hawel marra okhra")
      });
  }
  componentDidMount(){
     axios.get("http://localhost:3001/Employee/getAllEmployee").then((response)=>{
        console.log(response.data);
        this.setState({
          AllEmployees:response.data
        })
 })
    const id = this.props.match.params.id;
    console.log(this.id);
    return axios.get('http://localhost:3001/Abscence/getAbscence/'+id).then((response)=>{
    console.log(response.data);
    this.setState({
        type_of_leave:response.data.type_of_leave,
        start_date:response.data.start_date,
        return_date:response.data.return_date,
        leave_remaining:response.data.leave_remaining,
        employeeId:response.data.employeeId,
    })
    }) 
  }
    render() {
        return (
            <div style={{ marginTop: "4%" , marginLeft:"24%" }}>              
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Leave</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={(e)=>this.onSubmit(e)}>
              <div className="form-group">
                <label>Leave Type<span className="text-danger">*</span></label>
                <select  value={this.state.type_of_leave}
                   onChange={(e)=>this.onChangeTypeofLeave(e)}>
                  <option >Select Leave Type</option>
                  <option value="Annual leave" >Annual leave</option>
                  <option value="personnal leave" >personnal leave</option>
                  <option value="Compassionate leave">Compassionate leave</option>
                  <option value="Parental leave">Parental leave</option>
                </select>
              </div>
              <div className="form-group">
                <label>From <span className="text-danger">*</span></label>
                <div >
                  <input className="form-control " type="date" 
                    dateFormat="DD-MM-YYYY"
                   value={this.state.start_date}
                   onChange={(e)=>this.onChangeStartDate(e)}           
                  />
                </div>
              </div>
              <div className="form-group">
                <label>To <span className="text-danger">*</span></label>
                <div >
                  <input className="form-control " type="date"
                   value={this.state.return_date}
                   onChange={(e)=>this.onChangeReturnDate(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Remaining Leaves <span className="text-danger">*</span></label>
                <input className="form-control" type="text"  
                 value={this.state.leave_remaining}
                 onChange={(e)=>this.onChangeleaveRemaining(e)}/>
              </div>
              <div className="form-group">
                <label>Employee Name <span className="text-danger">*</span></label>
                <select >
                  <option>Select Employee</option>
                  {this.state.AllEmployees.map((Employee)=>(
                  <option value={this.state.EmployeeID=Employee.id}
                  onChange={(e)=>this.onChangeEmployeeID(e)} >{Employee.first_name} {Employee.last_name}</ option> 
                  ))}
                </select>
              </div>
              <div >
                <input type="submit"/ >
              </div>
            </form>
          </div>
        </div>
      </div>  
        )
    }
}
