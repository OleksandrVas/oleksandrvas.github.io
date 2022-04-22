import {TodoAction, TodoActionTypes, todoState} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";
import {todoIpi} from "../../Api/API";


const initialState: todoState = {
    todo: [],
    inProgress: [],
    done: [],
    loading: false,
    error: "",
    status: ["To do", "In Progress", "Done"]
}

export const todoReducer = (state = initialState, action: TodoAction): todoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS : {
            return {
                ...state,
                loading: true,
            }
        }
        case TodoActionTypes.FETCH_TODOS_SUCCESS : {
            return {
                ...state,
                loading: false,
                todo: action.payload
            }
        }
        case TodoActionTypes.SET_IN_PROGRESS : {
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload.id),
                inProgress: [...state.inProgress, action.payload.setTicket]
            }
        }
        case TodoActionTypes.SET_DONE : {
            return {
                ...state,
                inProgress: state.inProgress.filter(item => item.id !== action.payload.id),
                done: [...state.done, action.payload.setTicket]
            }
        }


        default : {
            return state
        }
    }
}

export const setInProgress = (payload: any) => ({type: TodoActionTypes.SET_IN_PROGRESS, payload})
export const setDone = (payload: any) => ({type: TodoActionTypes.SET_DONE, payload})


export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get(todoIpi)
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: "Произошла ошибка"
            })
        }
    }
}