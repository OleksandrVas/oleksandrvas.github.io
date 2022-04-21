import React, {useEffect, useState} from 'react';
import App from "../App";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../store/action-creators/todo";
import {fetchUsers, setUserAvatar} from "../store/reducers/userReducer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {color} from "./getColor";
import {setDone, setInProgress} from "../store/reducers/todoReducer";
import {checkProgressStatus, statusOfProgress} from "./checkProgressStatus";


const AppContainer: React.FC = ({}) => {
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
            <App dispatch={dispatch} statusOfProgress={statusOfProgress} checkProgressStatus={checkProgressStatus}
                 todoState={todoState} userState={userState}/>
        </>

    );
};


export default AppContainer
