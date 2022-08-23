import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./app/appReducer";
import { authReducer } from "./auth/authReducer";



const rootReducer = combineReducers(authReducer,appReducer)


const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = legacy_createStore(rootReducer, enhancer);