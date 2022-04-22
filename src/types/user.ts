export interface UserState {
    users: any[],
    userAvatar: any[],
    loadingUsers: boolean,
    error: string,
}


export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    SET_USER_AVATAR = "SET_USER_AVATAR",
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

interface SetUserAvatar {
    type: UserActionType.SET_USER_AVATAR,
    payload: any
}



export type UserAction = FetchUser | FetchUserError | FetchUserSuccess | SetUserAvatar