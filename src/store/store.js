import {createStore ,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer'; 
import cartReducer from './reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' ;
const initialState ={};
const middleware=[thunk];

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

   export const store = createStore(
   persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const persistedStore = persistStore(store);