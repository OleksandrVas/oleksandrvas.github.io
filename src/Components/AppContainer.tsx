import React, {useEffect} from 'react';
import App from "../App";
import {connect} from "react-redux";
import {fetchTodos} from "../store/action-creators/todo";
import {fetchUsers} from "../store/reducers/userReducer";
import {setDone, setInProgress} from "../store/reducers/todoReducer";

interface Props {
    isLoading: boolean,
    fetchTodos: any,
    fetchUsers: any,
    todo : any,
    users : any,
    setInProgress : any,
    setDone : any
}

const AppContainer: React.FC<Props> = ({isLoading,setInProgress,setDone, fetchTodos, fetchUsers ,todo , users}) => {

    useEffect(() => {
        fetchTodos()
        fetchUsers()
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }
    return (
        <App  users={users} setInProgress={setInProgress} setDone={setDone} todo={todo}/>
    );
};

const mapStateToProps = (state: any) => ({
    isLoading: state.todo.loading,
    todo : state.todo ,
    users : state.users
})


export default connect(mapStateToProps, {fetchTodos, fetchUsers ,setInProgress ,setDone})(AppContainer)