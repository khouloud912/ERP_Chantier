import {GET_CATEGORY,DELETE_CATEGORY} from '../category/categoryTypes';

const initialState = { categories: [{}] };

const CategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CATEGORY:
            return {...state,
                categories:action.payload.categories
            }
        default:return state    
    }
}
export default CategoryReducer;
