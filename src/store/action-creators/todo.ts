import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";
import axios from "axios";
import {todoIpi} from "../../Api/API";


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