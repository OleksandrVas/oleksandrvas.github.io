import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketFunc} from "./mapTicketWithProgress";

interface Props {
    todo: any,
    users: any,
    setInProgress: any,
    setUserAvatar:any,
    setDone: any,
    getLetterOfNameAndSecondName: any
}


const TicketList: React.FC<Props> = ({todo, getLetterOfNameAndSecondName,setUserAvatar, users, setInProgress, setDone}) => {

    if (users.loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todo.todo.length != 0 ? mapTicketFunc(todo.todo, todo.status[0], setInProgress, getLetterOfNameAndSecondName, users ,setUserAvatar ) :
                    <div>All {todo.status[0]} is done </div>}

                {todo.inProgress.length != 0 ? mapTicketFunc(todo.inProgress, todo.status[1], setDone, getLetterOfNameAndSecondName, users ,setUserAvatar) : ""}
                {todo.done.length != 0 ? mapTicketFunc(todo.done, todo.status[2], null, getLetterOfNameAndSecondName, users ,setUserAvatar) : ""}

            </div>
        </div>
    );
};

export default TicketList;