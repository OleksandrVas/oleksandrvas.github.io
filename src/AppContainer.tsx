import React, { useEffect } from "react";
import App from "./App";
import { useDispatch } from "react-redux";
import { fetchUsers, setUserAvatar } from "./store/reducers/userReducer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { color } from "./utils/getColor";
import { Route, Routes } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent/ErrorComponent";
import { fetchTodos } from "./store/reducers/todoReducer";
import Preloader from "./Components/UI/Preloader";

const AppContainer = () => {
  const dispatch = useDispatch();
  const todoState = useTypedSelector((state) => state.todo);
  const userState = useTypedSelector((state) => state.users);

  useEffect(() => {
    dispatch<any>(fetchTodos());
    dispatch<any>(fetchUsers());
  }, []);

  useEffect(() => {
    let colorForAvatar: Array<{ color: string }> = [];
    const createAvatar: () => void = () => {
      for (let i = 0; i <= userState.users.length; i++) {
        colorForAvatar.push({ color: color() });
      }
    };
    createAvatar();
    dispatch(setUserAvatar(colorForAvatar));
  }, [userState.users.length]);

  if (
    todoState.loading ||
    userState.loadingUsers ||
    userState.userAvatar.length < userState.users.length
  ) {
    return <Preloader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </>
  );
};

export default AppContainer;
