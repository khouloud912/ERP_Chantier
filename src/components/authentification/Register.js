import React, { useState } from 'react';
import authSvg from '../../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';




import axios from 'axios';
//import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';


const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    textChange: 'Sign Up'


  });
  const { username, email, password,textChange} = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (username && email && password) {
        setFormData({ ...formData, textChange: 'Submitting' });
        //toast.success("the admin will check your registration");
        //const PreUSer={username, email,password}
   //     console.log(PreUSer)
        //props.PreRegister(PreUSer)
        
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
          });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <div class="container" style={{marginTop:'3%', width:'70%' , height:'50%'}}>
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center' >
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1' >
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Sign Up 
            </h1>
            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  name="username"
                  style={{  height:"3px"}}
                  placeholder='Name'
                  onChange={handleChange('username')}
                  value={username}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='email'
                  name='email'
                  style={{  height:"3px"}}
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  style={{  height:"3px"}}
                  placeholder='Password'
                  onChange={handleChange('password')}
                  value={password}
                  name="password"
                />
             
                <button
                  type='submit'
                  style={{  height:"3px"}}

                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{ textChange}</span>
                </button>
              </div>
              
              <div className='flex flex-col items-center'>
                <a
                 style={{  height:"3px"}}

                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/login'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-4'>Sign In</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})`  }}
          ></div>
        </div>
      </div>
      ;
    </div>
    </div>
  );
};

export default Register;
