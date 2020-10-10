import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Select from 'react-select';
import {addProvider} from '../../store/actions/provider/providerActions';
import {connect} from 'react-redux';

 export default class addAbscence extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AllEmployees:[{}],
        type_of_leave:'',
        start_date:'',
        return_date:'',
        leave_remaining:'',
        employeeId:'',
        value: 3
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
    this.setState({
      employeeId: e.target.value
    }, function () {
      console.log(this.state.employeeId);
  });
  }
   onSubmit(e) {
    e.preventDefault();
     console.log(this.state.return_date);
     console.log(this.state.start_date);
     console.log(this.state.leave_remaining);
     console.log(this.state.type_of_leave);
     console.log(this.state.employeeId);
     axios.post('http://localhost:3001/Abscence/addAbscence', {
      type_of_leave: this.state.type_of_leave,
      start_date: this.state.start_date,
      return_date:this.state.return_date,
      leave_remaining:this.state.leave_remaining,
      employeeId:this.state.employeeId, 
     })
      .then((res) => {
          console.log(res.data)
          console.log("success")
      }).catch((error) => {
          console.log(error)
          console.log("hawel marra okhra")
      });
  }
  componentDidMount(){
    
    return axios.get("http://localhost:3001/Employee/getAllEmployee").then((response)=>{
            console.log(response.data);
            this.setState({
              AllEmployees:response.data.map( option => ({ value: option.id, label: option.first_name+ ' '+option.last_name }))
            })
     })
  }
    render() {
  
        return (
          <div className="container-fluid page-body-wrapper">
          <div class="row row-offcanvas row-offcanvas-right">
          <div class="content-wrapper" style={{backgroundColor: "white"}}>
            <div style={{ marginTop: "4%" , marginLeft:"24%" }}>              
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Leave</h5>
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
                <label>Employee Name<span className="text-danger">*</span></label>
                <Select
                  name="form-field-name"
                  value={this.state.employeeId}
                  options={this.state.AllEmployees}
                  onChange={e => this.setState({employeeId: e.value})}
              />                
              </div>
              <div>
                <input type="submit"/ >
              </div>
            </form>
          </div>
        </div>
      </div>  
      </div>
      </div></div>
        )
    }
}























