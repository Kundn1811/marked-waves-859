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

export const taskCreateRequest = () => {
    return {
        type : TASK_CREATE_REQUEST
    }
}
export const taskCreateSuccess = (payload) => {
    return {
        type : TASK_CREATE_SUCCESS,
        payload
    }
}
export const taskCreateFailure = (err) => {
    return {
        type : TASK_CREATE_FAILURE,
        err
    }
}

export const taskUpdateRequest = () => {
    return {
        type : TASK_UPDATE_REQUEST
    }
}
export const taskUpdateSuccess = (payload) => {
    return {
        type : TASK_UPDATE_SUCCESS,
        payload
    }
}
export const taskUpdateFailure = (err) => {
    return {
        type : TASK_UPDATE_FAILURE,
        err
    }
}
export const taskDeleteRequest = () => {
    return {
        type : TASK_DELETE_REQUEST
    }
}
export const taskDeleteSuccess = (payload) => {
    return {
        type : TASK_DELETE_SUCCESS,
        payload
    }
}
export const taskDeleteFailure = (err) => {
    return {
        type : TASK_DELETE_FAILURE,
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

export const createTask = (payload) => (dispatch) => {
    dispatch(taskCreateRequest())
    return axios.post("http://localhost:8080/task/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskCreateSuccess(res.data)))
    .catch((err)=>dispatch(taskCreateFailure(err)))
}

export const updateTask = (payload) => (dispatch) => {
    dispatch(taskUpdateRequest())
    return axios.patch("http://localhost:8080/task/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskUpdateSuccess(res.data)))
    .catch((err)=>dispatch(taskUpdateFailure(err)))
}

export const deleteTask = (payload) => (dispatch) => {
    dispatch(taskDeleteRequest())
    return axios.patch("http://localhost:8080/task/create",payload,{
        headers : {
            "authorization" : `Bearer ${loadData("tmetricUser")?.token}`
        }
    })
    .then((res)=>dispatch(taskDeleteSuccess(res.data)))
    .catch((err)=>dispatch(taskDeleteFailure(err)))
}