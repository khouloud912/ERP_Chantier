import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import ProviderReducer from '../actions/provider/providerReducer';
import EmployeeReducer from '../actions/employee/employeeReducer';
import AbscenceReducer from '../actions/abscence/abscenceReducer';
import DepartmentReducer from '../actions/departments/departmentReducer';
import ArticleReducer from '../actions/article/AllArticleReducer';
import CategoryReducer from '../actions/category/categoryReducer';
import CommandeReducer from '../actions/commande/commandeReducer';
import AuthReducer from '../actions/authentification/authReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cartState'] // which reducer want to store
  };
const rootReducer = combineReducers({
    cartState:cartReducer,
    providerState:ProviderReducer,
    EmployeeState:EmployeeReducer,
    AbscenceState:AbscenceReducer,
    DepartmentState: DepartmentReducer,
    ArticleState:ArticleReducer,
    CategoryState:CategoryReducer,
    CommandeState:CommandeReducer,
    AuthState:AuthReducer,
    
})
export default persistReducer(persistConfig,rootReducer);

