export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODO",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_IN_PROGRESS = "SET_IN_PROGRESS",
    SET_DONE = "SET_DONE",
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: [],
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string,
}

interface SetInProgressAction {
    type: TodoActionTypes.SET_IN_PROGRESS,
    payload: any
}

interface SetDoneAction {
    type: TodoActionTypes.SET_DONE,
    payload: any
}


export interface todoState {
    todo: any[],
    inProgress: any[],
    done: any[]
    loading: boolean,
    error: string,
    status: any[]
}

export type TodoAction =
    FetchTodoAction |
    FetchTodoSuccessAction |
    FetchTodoErrorAction |
    SetInProgressAction |
    SetDoneAction