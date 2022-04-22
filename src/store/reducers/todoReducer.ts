import {TodoAction, TodoActionTypes, todoState} from "../../types/todo";


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