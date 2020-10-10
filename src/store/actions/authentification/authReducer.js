import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    PRE_REGISTRATION,
     DELETE_PREUSER
  } from "./authTypes";
  
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    PreRegistered :[{}],
    user:
      user? { isLoggedIn: true, user }
     : { isLoggedIn: false, user }
  } 
   
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case PRE_REGISTRATION:
        console.log("koki")
        console.log(payload.user)
        return{
        ...state,
        PreRegistered:payload.user
        }
      case REGISTER_SUCCESS:
        return {
          ...state,
         // isLoggedIn: false,
        };
       case DELETE_PREUSER:
        console.log('REMOVE_REDUCER', payload, state.PreRegistered);
        return {
          ...state,
          PreRegistered: [state.PreRegistered].filter(hostname =>
          hostname.email !== payload,
       )}

          // PreRegistered:state.PreRegistered.filter(item=>item.email !== payload.emailbody)
          // PreRegistered: state.PreRegistered.filter((item, index) => index !== payload)
         


        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case LOGOUT:
          return {
              ...state,
              isLoggedIn: false,
              user: null,
            };
      default:
        return state;
    }
  }