export interface UserState {
  users: Array<{
    id: number;
    name: string;
    username: string;
    website: string;
    phone: string;
    email: string;
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
    address: {
      city: string;
      geo: { lat: string; lng: string };
      street: string;
      suite: string;
      zipcode: string;
    };
  }>;
  userAvatar: Array<{ color: number }>;
  loadingUsers: boolean;
  error: string;
}

export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  SET_USER_AVATAR = "SET_USER_AVATAR",
}

interface FetchUserAction {
  type: UserActionType.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: Array<{
    id: number;
    name: string;
    username: string;
    website: string;
    phone: string;
    email: string;
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
    address: {
      city: string;
      geo: { lat: string; lng: string };
      street: string;
      suite: string;
      zipcode: string;
    };
  }>;
}

interface FetchUserErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

interface SetUserAvatarAction {
  type: UserActionType.SET_USER_AVATAR;
  payload: Array<{ color: number }>;
}

export type UserAction =
  | FetchUserAction
  | FetchUserErrorAction
  | FetchUserSuccessAction
  | SetUserAvatarAction;
