import React, { useState, useEffect } from 'react';
import authSvg from '../../assests/welcome.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
//import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {activate} from '../../store/actions/authentification/authentificationAction';


const Activation = ({ match,activate } ) => {
  const [formData, setFormData] = useState({
    username: '',
    token: '',
    show: true
  });


  useEffect((props) => {
    let token = match.params.token;
    let { username } = jwt.decode(token);
    if (token) {
      setFormData({ ...formData, username, token });
    }
    console.log(token, username);
  }, [match.params]);
  const { username, token, show } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    activate(token);
/*
    axios
      .post(`${process.env.REACT_APP_API_URL}/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

        toast.success(res.data.message);
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });*/
  };

  return (
    <div class="container" style={{marginTop:'3%', width:'70%' , height:'5rem'}}>

    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Welcome {username}
            </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <button
                style={{  height:"3px"}}

                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>Activate your Account</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or sign up again
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/register'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-4'>Sign Up</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
    </div>
  );
};


const mapStateToProps =state=>({
    AuthProps : state.AuthState,
})

export default connect(mapStateToProps, {activate})(Activation);
