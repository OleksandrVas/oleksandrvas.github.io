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
  payload: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetInProgressAction {
  type: TodoActionTypes.SET_IN_PROGRESS;
  payload: { id: number; setTicket: { id: number; title: string } };
}

interface SetDoneAction {
  type: TodoActionTypes.SET_DONE;
  payload: { id: number; setTicket: { id: number; title: string } };
}

export interface todoState {
  todo: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
  inProgress: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
  done: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>;
  loading: boolean;
  error: string;
  status: Array<string>;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetInProgressAction
  | SetDoneAction;
