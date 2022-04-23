import {TodoAction, TodoActionTypes, todoState} from "../../types/todo";
import {Dispatch} from "redux";
import {todoIpi} from "../../Api/API";

const filterArray = (array: any, action: any) => {
    return array.filter((item: any) => item.id !== action)
}
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
        case TodoActionTypes.FETCH_TODOS_ERROR : {
            return {
                ...state,
                error: action.payload
            }
        }
        case TodoActionTypes.SET_IN_PROGRESS : {
            return {
                ...state,
                todo: filterArray(state.todo, action.payload.id),
                inProgress: [...state.inProgress, action.payload.setTicket]
            }
        }
        case TodoActionTypes.SET_DONE : {
            return {
                ...state,
                inProgress: filterArray(state.inProgress, action.payload.id),
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
            const response = await todoIpi.getTodo()
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