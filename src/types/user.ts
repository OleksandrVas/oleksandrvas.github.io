export interface UserState {
    users: any[],
    loading: boolean,
    error: string,
}


export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUser {
    type: UserActionType.FETCH_USERS
}

interface FetchUserSuccess {
    type: UserActionType.FETCH_USERS_SUCCESS,
    payload: []
}

interface FetchUserError {
    type: UserActionType.FETCH_USERS_ERROR,
    payload: string
}


export type UserAction = FetchUser | FetchUserError | FetchUserSuccess