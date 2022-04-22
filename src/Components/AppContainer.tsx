import React, {useEffect} from 'react';
import App from "../App";
import {useDispatch} from "react-redux";
import {fetchUsers, setUserAvatar} from "../store/reducers/userReducer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {color} from "./getColor";
import {checkProgressStatus, statusOfProgress} from "./checkProgressStatus";
import {Route, Routes} from "react-router-dom";
import ErrorComponent from "./ErrorComponent/ErrorComponent";
import {getLetterOfNameAndSecondName} from "./getLetterOfNameAndSecondName";
import {fetchTodos} from "../store/reducers/todoReducer";
import Preloader from "./UI/Preloader";


const AppContainer = () => {
    const dispatch = useDispatch()
    const todoState = useTypedSelector(state => state.todo)
    const userState = useTypedSelector(state => state.users)


    useEffect(() => {
        dispatch<any>(fetchTodos())
        dispatch<any>(fetchUsers())
    }, [])

    const colorForAvatar: any[] = []
    for (let i = 0; i <= userState.users.length; i++) {
        colorForAvatar.push({color: color()})
    }

    useEffect(() => {
        dispatch<any>(setUserAvatar(colorForAvatar))
    }, [userState.users.length])


    if (userState.userAvatar.length < colorForAvatar.length) {
        return <Preloader/>
    }
    if (todoState.loading) {
        return <Preloader/>
    }

    return (
        <>
            <Routes>
                <Route path='/' element={
                    <App dispatch={dispatch} statusOfProgress={statusOfProgress}
                         getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                         checkProgressStatus={checkProgressStatus}
                         todoState={todoState} userState={userState}/>
                }/>
                <Route path="*" element={<ErrorComponent/>}/>
            </Routes>

        </>

    );
};


export default AppContainer
