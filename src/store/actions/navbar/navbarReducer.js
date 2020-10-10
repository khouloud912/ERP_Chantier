import {CHANGE_DASHBOARD} from '../navbar/navbarType';

const initialState = { 
    RhElement:false,
    FinanceElement:false,
    AdminElement:false
 };
const navbarReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_DASHBOARD:
            console.log(action.payload)
            return {...state,
                RhElement:action.payload.RhState,
                FinanceElement:action.payload.FinanceState,
                AdminElement:action.payload.AdminSate
            }
        default:return state    
    }
}
export default navbarReducer;
