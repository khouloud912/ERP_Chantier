import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {addDepartment} from '../../store/actions/departments/departmentAction';
import {connect} from 'react-redux';

 class AddDepartement extends Component {

    constructor(props) {
        super(props);        
        this.state = {
           departement_name:'',
            sub_departement:'',
            departement_status:'',
            main_operation:'',
            description:''
        };
        this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
        this.onChangeSubDepartment= this.onChangeSubDepartment.bind(this);
        this.onChangeDepartmentStatus = this.onChangeDepartmentStatus.bind(this);
        this.onChangeMainOperation = this.onChangeMainOperation.bind(this);
        this.onChangedescription= this.onChangedescription.bind(this);
    //    this.componentDidMount=this.componentDidMount.bind(this);
       this.onSubmit= this.onSubmit.bind(this);
      }
      onChangeDepartmentName(e){
        console.log(e.target.value);
        this.setState({ departement_name: e.target.value });
      }
      onChangeSubDepartment(e){
        console.log(e.target.value);
        this.setState({ sub_departement: e.target.value });
      }
      onChangeDepartmentStatus(e){
        console.log(e.target.value);
        this.setState({ departement_status: e.target.value });
      }
      onChangeMainOperation(e){
        console.log(e.target.value);
        this.setState({ main_operation: e.target.value });
      }
      onChangedescription(e){
        console.log(e.target.value);
        this.setState({ description: e.target.value });
      }
      
      onSubmit(e){
        e.preventDefault();
        console.log(this.state.departement_name);
        const data={
            departement_name: this.state.departement_name,
            sub_departement :this.state.sub_departement,
            main_operation:this.state.main_operation,
            description:this.state.description,
            departement_status:this.state.hiring_date,
        }
        this.props.addDepartment(data)
 };
     render() {
        return (
          <div className="container-fluid page-body-wrapper">
          <div class="row row-offcanvas row-offcanvas-right">
          <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}> 
            
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={(e)=>{this.onSubmit(e)}}>
                <p className="h4 text-center mb-4">Add Department</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Department Name
                </label>
                <input type="text" id="defaultFormRegisterNameEx" className="form-control" value={this.state.departement_name} onChange={(e)=>{this.onChangeDepartmentName(e)}} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Sub Department Name
                </label>
                <input type="text" id="defaultFormRegisterEmailEx" className="form-control" value={this.state.sub_departement} onChange={(e)=>{this.onChangeSubDepartment(e)}} />
                <br />
                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                 Description
                </label>
                <input type="text" id="defaultFormRegisterConfirmEx" className="form-control"  value={this.state.description} onChange={(e)=>{this.onChangedescription(e)}} />
                <br />
                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                 Main Operation
                </label>
                <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" value={this.state.main_operation} onChange={(e)=>{this.onChangeMainOperation(e)}} />
                 <br/>
                <select className="form-control"  value={this.state.sub_departement} onChange={(e)=>{this.onChangeSubDepartment(e)}}>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="valide">valide</option>
                    <option value="Non valide ">Non valide</option>
                </select>
                <div className="text-center mt-4">
                <input  type="submit" />
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>      

</div></div></div>
        )
    }

}


const mapStateToProps =state=>({
    DepartmentProps:state.DepartmentState
    })

 export default connect(mapStateToProps, {addDepartment})(AddDepartement);



