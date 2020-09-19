import {GET_PROVIDERS} from '../provider/providerTypes';

const initialState = { providers: [{}] };

const ProviderReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PROVIDERS:
            return {...state,
                providers:action.payload.provider
            }

        default:return state    
    }
}
export default ProviderReducer;
