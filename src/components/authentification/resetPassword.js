import React, { useState, useEffect } from 'react';
import authSvg from '../../assests/reset.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {connect} from 'react-redux';
import {resetPassword} from '../../store/actions/authentification/authentificationAction';


const ResetPassword = ({match,resetPassword}) => {
  const [formData, setFormData] = useState({
      password1: '',
      password: '',
      token: '',
    textChange: 'Submit'
  });
    const { password1, password, textChange, token } = formData;
    
    useEffect(() => {
        let token = match.params.token
        if(token) {
            setFormData({...formData, token,})
        }
        
    }, [])
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
    const handleSubmit = e => {
      console.log(password1, password)
    e.preventDefault();
    if ((password1 === password) && password1 && password) {
      setFormData({ ...formData, textChange: 'Submitting' });
      resetPassword(password,token)
    } else {
      toast.error('Passwords don\'t matches');
    }
  };
  return (
    <div class="container" style={{marginTop:'3%', width:'70%' , height:'5rem'}}>
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Reset Your Password
            </h1>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              
              <form
                className='mx-auto max-w-xs relative '
                onSubmit={handleSubmit}
              >
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='password'
                  name='password'
                  placeholder='password'
                  style={{  height:"3px"}}
                  onChange={handleChange('password')}
                  value={password}
                  />
                  <input
                  className='w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='password'
                  placeholder='Confirm password'
                  style={{  height:"3px"}}
                  onChange={handleChange('password1')}
                  value={password1}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Submit</span>
                </button>
              </form>
            </div>
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
export default connect(mapStateToProps, {resetPassword})(ResetPassword);

