import {UserAction, UserActionType, UserState} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";


const initialState: UserState = {
    users: [],
    loading: false,
    error: ""
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {

        case UserActionType.FETCH_USERS : {
            return {
                ...state,
                loading: true
            }
        }
        case  UserActionType.FETCH_USERS_SUCCESS : {
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        }
        case UserActionType.FETCH_USERS_ERROR : {
            return {
                ...state,
                error: action.payload
            }
        }

        default : {
            return state
        }
    }
}

export const fetchUsers = () =>
    async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                .then(resp => resp.data)
            dispatch(({type: UserActionType.FETCH_USERS_SUCCESS, payload: response}))
        } catch (e) {
            dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: "Произошла ошбика"})
        }
    }


