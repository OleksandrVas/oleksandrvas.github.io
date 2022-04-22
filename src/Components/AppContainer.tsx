import React, {useEffect} from 'react';
import App from "../App";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../store/action-creators/todo";
import {fetchUsers, setUserAvatar} from "../store/reducers/userReducer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {color} from "./getColor";
import {checkProgressStatus, statusOfProgress} from "./checkProgressStatus";
import {Link, Route, Routes} from "react-router-dom";
import ErrorComponent from "./ErrorComponent/ErrorComponent";
import {getLetterOfNameAndSecondName} from "./getLetterOfNameAndSecondName";


const AppContainer = ({}) => {
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
        return <div>Loading</div>
    } else if (todoState.loading) {
        return <div>Loading</div>
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
