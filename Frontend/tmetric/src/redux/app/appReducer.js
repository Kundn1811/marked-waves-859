import {
    WORKSPACE_CREATE_REQUEST,
    WORKSPACE_CREATE_SUCCESS,
    WORKSPACE_CREATE_FAILURE,
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAILURE,
    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAILURE,
     TASK_DELETE_REQUEST,
     TASK_DELETE_SUCCESS,
     TASK_DELETE_FAILURE
} from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    tasks:[],
    workSpace:[]
}



export const appReducer = (state={initState},{type,payload}) => {
    switch(type){
        case WORKSPACE_CREATE_REQUEST : {
            return {
                ...state,
                isLoading:true
            }
        }
        case WORKSPACE_CREATE_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                workSpace : payload,
                isError:false
            }
        }
        case WORKSPACE_CREATE_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case TASK_CREATE_REQUEST : {
            return {
                ...state,
                isLoading:true
            }
        }
        case TASK_CREATE_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                tasks : payload,
                isError:false
            }
        }
        case TASK_CREATE_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        
        case TASK_UPDATE_REQUEST : {
            return {
                ...state,
                isLoading:true
            }
        }
        case TASK_UPDATE_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                tasks : payload,
                isError:false
            }
        }
        case TASK_UPDATE_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case TASK_DELETE_REQUEST : {
            return {
                ...state,
                isLoading:true
            }
        }
        case TASK_DELETE_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                tasks : payload,
                isError:false
            }
        }
        case TASK_DELETE_FAILURE : {
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
       default : {
        return state
       }
    }
}