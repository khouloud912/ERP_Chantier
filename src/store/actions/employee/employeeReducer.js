import {GET_EMPLOYEES} from '../employee/employeeTypes';

const initialState = { employees: [{}] ,
};

const EmployeeReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_EMPLOYEES:
            return {...state,
                employees:action.payload.employees
            }
        default:return state    
    }
}
export default EmployeeReducer;
