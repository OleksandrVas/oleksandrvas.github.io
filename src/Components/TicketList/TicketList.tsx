import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketFunc} from "./mapTicketWithProgress";
import {setDone, setInProgress} from "../../store/reducers/todoReducer";

interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
}


const TicketList: React.FC<Props> = ({dispatch, todoState, userState}) => {


    if (userState.loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todoState.todo.length != 0 ?
                    mapTicketFunc(todoState.todo,
                        todoState.status[0],
                        userState.users,
                        true,
                        userState.userAvatar,
                        setInProgress,
                        dispatch
                    )
                    : ""}
                {todoState.inProgress.length != 0 ?
                    mapTicketFunc(todoState.inProgress,
                        todoState.status[1],
                        userState.users,
                        true,
                        userState.userAvatar,
                        setDone,
                        dispatch)
                    : ""}
                {todoState.done.length != 0 ?
                    mapTicketFunc(todoState.done,
                        todoState.status[2],
                        userState.users,
                        null,
                        userState.userAvatar,
                        null,
                        dispatch)
                    : ""}

            </div>
        </div>
    );
};

export default TicketList;