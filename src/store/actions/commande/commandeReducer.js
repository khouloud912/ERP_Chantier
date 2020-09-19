import { GET_COMMNADES ,GET_COMMNADESLIGNES } from "./commandeTypes";

const initialState = { 
    commandes: [{}],
    commandeLignes:[{}]
 };

const CommandeReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_COMMNADES:
            return {...state,
                commandes:action.payload.commandes
            }
        case GET_COMMNADESLIGNES:
            return {...state,
                commandeLignes:action.payload.commandeLignes
            }
        default:return state    
    }
}
export default CommandeReducer;
