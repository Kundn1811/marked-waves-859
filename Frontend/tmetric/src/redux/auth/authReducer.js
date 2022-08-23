import { loadData, saveData } from "../../utils/localstorage"
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "./actionType"


const token = loadData("tmetricUser")?.token || ""

const initState = {
    isLoading : false,
    isError:false,
    token : token,
    isAuth : token ? true : false,
    data : {}
}


export const authReducer = (state = initState,{type,payload}) => {
    switch(type){
        case SIGNUP_REQUEST : {
            return {
               ...state,
               isLoading:true
            }
        }
        case SIGNUP_SUCCESS : {
            return {
               ...state,
               isLoading:false,
               data : payload
            }
        }
        case SIGNUP_FAILURE : {
            return {
               ...state,
               isLoading:false,
               isError : true
            }
        }
        case SIGNIN_REQUEST : {
            return {
               ...state,
               isLoading:true
            }
        }
        case SIGNIN_SUCCESS : {
            saveData("tmetricUser",payload)
            return {
               ...state,
               isLoading:false,
               isAuth : true,
               data : payload
            }
        }
        case SIGNIN_FAILURE : {
            return {
               ...state,
               isLoading:false,
               isError : true
            }
        }

        default : {
            return state
        }
    }
}