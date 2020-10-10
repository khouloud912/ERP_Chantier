import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {connect} from 'react-redux';
import Select from "react-select";
import moment from 'moment';
import { MDBSelect } from "mdbreact";
import { CarouselItem } from 'react-bootstrap';
import {LastRegistration , DeletePreRegisteredUser} from '../../store/actions/authentification/authentificationAction';


const UserMAnagement = (props) => {
    const [data, setData] = useState([]);  
    const [newUser, SetnewUser] = useState({  username :'',email: '', password:'' , roles:''});  

    const options = [
    { value: 'RhUser', label: 'Human Ressource Manager' },
    { value: 'FinanceUser', label: 'Finance Manager' },
  ]
  const styles = {
    container: base => ({
      ...base,
      flex: 1,
      height: 35,
      width:200
    })
  };
    useEffect(() => { 
        console.log("this is preregistered",props.AuthProps.PreRegistered)
        setData(props.AuthProps.PreRegistered)
        //props.getAllArticles();
        //console.log(props.ArticleProps.AllArticles);
        //setArticle(props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name})))

    }, []); 
    const onChange = (e) => {  
        SetnewUser({ ...newUser, 
            [e.target.name]: e.target.value });
          }    

    const handleSubmit = e => {
       // e.preventDefault();  
        const dataofUser = { username:newUser.username, email:newUser.email, password: newUser.password , roles:newUser.roles };  
        console.log(dataofUser);
        props.LastRegistration(newUser.username  , newUser.email , newUser.password,  newUser.roles)
        /*
        axios.post("http://localhost:3001/Auth/register",{
            username,
            email,
            password
          })
          .then(res => {
            setFormData({
              ...formData,
              username: '',
              email: '',
              password: '',
              textChange: 'Submitted'
            });
            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              username: '',
              email: '',
              password: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });*/

    }


    return ( 
        <div className="container-fluid page-body-wrapper">
    <div class="row row-offcanvas row-offcanvas-right">
    <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"20%" }}>      
  <div class="card" style={{  width:"1000px"}}>
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">New Users</h3>
  <div class="card-body">
      <div id="table" class="table-editable">
        <span class="table-add float-right mb-3 mr-2">  
        </span>
        <table class="table table-bordered table-responsive-md table-striped text-center">
        <div>
          <thead>
            <tr>
              <th class="text-center">UserName </th>
              <th class="text-center"> email</th>
              <th class="text-center">Add Role</th>
              <th class="text-center">actions</th>
            </tr>
          </thead>
          <tbody>
          {[data].map((item) =>(
            <tr>
          <td class="pt-3-half" contenteditable="true" name="username" value={newUser.username} onChange={onChange} >{item.username}</td>
          <td  contenteditable="true"  name="email" value={item.email} 
          >{item.email}</td>
          <td >
          <Select
                 styles={styles} 
                  options={options} 
                  name="roles"
                  value={newUser.roles}
                  onChange={e => {
                    console.log(e)
                    SetnewUser(
                        {roles: e.value,
                        password:item.password ,
                        email:item.email,
                        username:item.username

                    },
                    )}}


                 // value={ArticleInputs.articleId}
                 // options={articles}
                 /*
                  onChange={e => {
                      console.log(e)
                      setArticleInputs({articleId: e.value})}}*/
                 />               
         </td>
              <td>
                <span class="table-remove">
                  <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?")
                  && props.DeletePreRegisteredUser(item.email)}
                   >Remove</button>
                <button type="button" class="btn btn-info btn-rounded btn-sm my-0"  onClick={handleSubmit} >ADD User </button>
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
  </div></div></div>
     );
}


const mapStateToProps=(state)=>({
    AuthProps :state.AuthState,
    })
export default connect(mapStateToProps,{LastRegistration,DeletePreRegisteredUser})(UserMAnagement);
  
 
