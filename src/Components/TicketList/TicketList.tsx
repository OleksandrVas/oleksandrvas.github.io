import React from 'react';
// @ts-ignore
import cl from "./TicketList.module.css"
import {mapTicketFunc} from "./mapTicketWithProgress";

interface Props {
    todo: any,
    setInProgress: any,
    setDone: any
}


const TicketList: React.FC<Props> = ({todo, setInProgress, setDone}) => {


    return (
        <div className={cl.list}>
            <h1>Ticket List </h1>
            <div>
                {todo.todo.length != 0 ? mapTicketFunc(todo.todo, todo.status[0], setInProgress) :
                    <div>All {todo.status[0]} is done </div>}
                {todo.inProgress.length != 0 ? mapTicketFunc(todo.inProgress, todo.status[1], setDone) : ""}
                {todo.done.length != 0 ? mapTicketFunc(todo.done, todo.status[2], null) : ""}

            </div>
        </div>
    );
};

export default TicketList;