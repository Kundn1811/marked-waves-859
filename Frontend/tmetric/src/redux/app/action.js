import {
    WORKSPACE_CREATE_REQUEST,
    WORKSPACE_CREATE_SUCCESS,
    WORKSPACE_CREATE_FAILURE
} from "./actionType"
import axios from 'axios'
import { loadData } from "../../utils/localstorage"

export const workspaceCreateRequest = () => {
    return {
        type : WORKSPACE_CREATE_REQUEST
    }
}
export const workspaceCreateSuccess = (payload) => {
    return {
        type : WORKSPACE_CREATE_SUCCESS,
        payload
    }
}
export const workspaceCreateFailure = (err) => {
    return {
        type : WORKSPACE_CREATE_FAILURE,
        err
    }
}


export const createWorkSpace = (payload) => (dispatch) => {
    dispatch(workspaceCreateRequest())
    return axios.post("http://localhost:8080/workspace/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(workspaceCreateSuccess(res.data)))
    .catch((err)=>dispatch(workspaceCreateFailure(err)))

}