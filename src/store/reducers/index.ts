import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {userReducer} from "./userReducer";


export const root = combineReducers({
    todo : todoReducer,
    users : userReducer,
})

export type RootState = ReturnType<typeof root>