import {CHANGE_DASHBOARD} from './navbarType';




export const changeState=(v1,v2,v3)=>{
    console.log(v1,v2,v3);
        return {
        type:CHANGE_DASHBOARD,
        payload:{
            RhState:v1,
            FinanceState:v2,
            AdminSate:v3
        } 
   }
    }












/*
export const changeState =(v1,v2,v3)=>{
    console.log(v1,v2,v3);
    return function (dispatch) {
        console.log("sgf")
        return {
             type:CHANGE_DASHBOARD,
             payload:{
                 RhState:v1,
                 FinanceState:v2,
                 AdminSate:v3
             }     } }}



*/



             
/*
export const changeState=(v1,v2,v3)=>(dispatch)=>{
    console.log(v1,v2,v3);
        return dispatch({
        type:CHANGE_DASHBOARD,
        payload:{
            RhState:v1,
            FinanceState:v2,
            AdminSate:v3
        } 
   })
    }
  */  

/*
export const changeState =(v1,v2,v3)=>{
        return (dispatch)=>{
        console.log("getting ");
            dispatch({
                type:CHANGEDASHBOARD,      
                payload:{
                    RhState:v1,
                    FinanceState:v2,
                    AdminSate:v3
                } 
                })
                }
            }
            */