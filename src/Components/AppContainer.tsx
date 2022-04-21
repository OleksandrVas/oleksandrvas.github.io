import React, {useEffect} from 'react';
import App from "../App";
import { useDispatch} from "react-redux";
import {fetchTodos} from "../store/action-creators/todo";
import {fetchUsers} from "../store/reducers/userReducer";
import {useTypedSelector} from "../hooks/useTypedSelector";



const AppContainer: React.FC = ({ }) => {

    const dispatch = useDispatch()
    const {loading } = useTypedSelector(state => state.todo)
    // const {  } = useTypedSelector(state => state.users)

    useEffect(() => {
        dispatch<any>(fetchTodos())
        dispatch<any>(fetchUsers())
    }, [])




    if (loading) {
        return <div>Loading</div>
    }
    return (
        <>
            <App />
        </>

    );
};


export default AppContainer
