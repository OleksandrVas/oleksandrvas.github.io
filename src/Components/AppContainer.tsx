import React, {useEffect, useState} from 'react';
import App from "../App";
import {connect} from "react-redux";
import {fetchTodos} from "../store/action-creators/todo";
import {fetchUsers, setUserAvatar} from "../store/reducers/userReducer";
import {setDone, setInProgress} from "../store/reducers/todoReducer";

interface Props {
    isLoading: boolean,
    fetchTodos: any,
    fetchUsers: any,
    todo: any,
    users: any,
    setInProgress: any,
    setDone: any,
    setUserAvatar: any,
}

const AppContainer: React.FC<Props> = ({
                                           isLoading,
                                           setUserAvatar,
                                           setInProgress,
                                           setDone,
                                           fetchTodos,
                                           fetchUsers,
                                           todo,
                                           users
                                       }) => {
    useEffect(() => {
        fetchTodos()
        fetchUsers()
    }, [])

    const getLetterOfNameAndSecondName = (user: any) => {
        return user.split(" ").map((n: any) => n[0]).join("")
    };



    if (isLoading) {
        return <div>Loading</div>
    }
    return (
        <>
            <App users={users} setUserAvatar={setUserAvatar} getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                 setInProgress={setInProgress}
                 setDone={setDone} todo={todo}/>
        </>

    );
};

const mapStateToProps = (state: any) => ({
    isLoading: state.todo.loading,
    todo: state.todo,
    users: state.users
})


export default connect(mapStateToProps, {fetchTodos, fetchUsers, setUserAvatar, setInProgress, setDone})(AppContainer)