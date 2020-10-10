import {GET_ARTICLEOUTPUT,GET_ARTICLEINPUT,GET_ARTICLES} from '../article/AllArticleTypes';

const initialState = { 
    AllArticles: [{}],
    ArticleInput:[{}],
    ArticleOutput:[{}]
}
const ArticleReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ARTICLES:
            return {...state,
                AllArticles:action.payload.articles
            }
        case GET_ARTICLEINPUT:
            return {...state, 
                ArticleInput:action.payload.articlesInput
            }
        case GET_ARTICLEOUTPUT:
           return {
                ...state,
                ArticleOutput:action.payload.articlesOutput
            }
        default:return state    
    }
}
export default ArticleReducer;
