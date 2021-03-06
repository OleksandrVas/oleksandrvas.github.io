import { UserAction, UserActionType, UserState } from "../../types/user";
import { Dispatch } from "react";
import { userApi } from "../../Api/API";

const initialState: UserState = {
  users: [],
  userAvatar: [],
  loadingUsers: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USERS: {
      return {
        ...state,
        loadingUsers: true,
      };
    }
    case UserActionType.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
      };
    }
    case UserActionType.SET_USER_AVATAR: {
      return {
        ...state,
        userAvatar: action.payload,
      };
    }
    case UserActionType.FETCH_USERS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserAvatar = (payload: Array<{ color: string }>) => ({
  type: UserActionType.SET_USER_AVATAR,
  payload,
});

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionType.FETCH_USERS });
    const response = await userApi.getUser().then((resp) => resp.data);
    dispatch({
      type: UserActionType.FETCH_USERS_SUCCESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UserActionType.FETCH_USERS_ERROR,
      payload: "Произошла ошбика",
    });
  }
};
