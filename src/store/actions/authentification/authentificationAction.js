import { ToastContainer, toast } from 'react-toastify';
import history from './history'

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    PRE_REGISTRATION,
    DELETE_PREUSER
  } from "./authTypes";

  export const register = (newUser) => (dispatch) => {
     return axios.post("http://localhost:3001/Auth/register",newUser).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        }).catch(err=>console.log(err))
  };
  export const activate = (token) => (dispatch) => {
    console.log(token)
     axios.post("http://localhost:3001/Auth/activation", {token}).then(
     (response) => {
       console.log(response.data.User);
      toast.success(response.data.message);
      dispatch({
        type:PRE_REGISTRATION ,
        payload:{
         user:response.data.User
        } 
      });
       }).catch(err=> toast.error(err.response.data.errors))
 };

 export const LastRegistration=(username, email , password , roles)=>(dispatch)=>{

 console.log(username,email, password, roles)

  axios.post("http://localhost:3001/Auth/LastRegistration", {username,email,password,roles}).then(
    (response) => {
      console.log(response.data);
     toast.success(response.data.message);
     dispatch({
       type:REGISTER_SUCCESS
     });
      }).catch(err=> toast.error(err.response.data.errors))
    }
export const DeletePreRegisteredUser=(email)=>(dispatch)=>{
  console.log(email);
  dispatch({
    type: DELETE_PREUSER ,
    payload: email
  });
}

   export const  login =  (thisUser) =>  (dispatch) => {
    
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user:thisUser  },
        });
  
  };

  export const forgetPassword = (email, password) => (dispatch) => {
    console.log("koki")
    return axios.put("http://localhost:3001/Auth/forgotpassword",{email}).then(
      (response) => {
        console.log(response)
        toast.success(`Please check your email`);
/*
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response.data },
        });*/
      }).catch(err=>toast.error(err.response.data.error))
  };

  export const resetPassword = (password, token) => (dispatch) => {
    console.log("koki")
    return axios.put("http://localhost:3001/Auth/resetpassword",{
      newPassword: password,
      resetPasswordLink: token}).then(
      (response) => {
        toast.success(response.data.message);
/*
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response.data },
        });*/
      }).catch(err=>toast.error('Something is wrong try again')
      )
  };

    export const logout = () => (dispatch) => {
    localStorage.removeItem("user");
    dispatch({
      type: LOGOUT,
    });
  };