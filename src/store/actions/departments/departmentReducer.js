import {GET_DEPARTMENTS} from '../departments/departmentTypes';

const initialState = { departments: [{}] };

const DepartmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_DEPARTMENTS:
            return {...state,
                departments:action.payload.departments
            }
        default:return state    
    }
}
export default DepartmentReducer;
