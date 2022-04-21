import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketFunc} from "./mapTicketWithProgress";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {setDone, setInProgress} from "../../store/reducers/todoReducer";

interface Props {
}


const TicketList: React.FC<Props> = ({}) => {
    const {status, todo, inProgress, done } = useTypedSelector(state => state.todo)
    const {loadingUsers, userAvatar , users} = useTypedSelector(state => state.users)


    if (loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todo.length != 0 ?
                    mapTicketFunc(todo, status[0], users, true, userAvatar ,setInProgress)
                    : <div>All {status[0]} {status[1]} </div>}

                {inProgress.length != 0 ?
                    mapTicketFunc(inProgress, status[1], users, true, userAvatar , setDone)
                    : ""}
                {done.length != 0 ?
                    mapTicketFunc(done, status[2], users, "", userAvatar , null)
                    : ""}

            </div>
        </div>
    );
};

export default TicketList;