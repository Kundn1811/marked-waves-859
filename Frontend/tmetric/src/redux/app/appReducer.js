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
     TASK_DELETE_FAILURE,
     GET_PROJECT_SUCCESS,
     DELETE_PROJECT_SUCCESS,
     CREATE_PROJECT_SUCCESS,
     PATCH_PROJECT_SUCCESS
} from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    tasks:[],
    workSpace:[],
    projects:[]
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
        case GET_PROJECT_SUCCESS:{
            console.log(payload)
            return {
                ...state,
                projects:payload
            }
        }
        case DELETE_PROJECT_SUCCESS:{
            console.log(payload)
            let data = state.projects.filter((item)=>item._id !== payload)
            return{
                ...state,
                projects:data
            }
        }
        case CREATE_PROJECT_SUCCESS:{
            console.log(payload)
            return{
                ...state,
                projects:[...state.projects,payload]
            }
        }
        case PATCH_PROJECT_SUCCESS:{
            const {id,payload} = payload
            const data = state.projects.map((item)=>{
                if(item._id === id){
                    return {
                        ...item,payload
                    }
                }
                else{
                    return item
                }
            })
            return {
                ...state,
                projects:data
            }
        }
       default : {
        return state
       }
    }
}