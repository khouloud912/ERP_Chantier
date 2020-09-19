import {GET_ABSCENCE} from '../abscence/abscenceType';

const initialState = { abscences: [{}] };

const AbscenceReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ABSCENCE:
            return {...state,
                abscences:action.payload.abscences
            }
        default:return state    
    }
}
export default AbscenceReducer;
