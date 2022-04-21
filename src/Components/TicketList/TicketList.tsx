import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketList} from "./mapTicketWithProgress";

interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
    statusOfProgress: any,
    checkProgressStatus: any,
}


const TicketList: React.FC<Props> = ({dispatch, statusOfProgress, checkProgressStatus, todoState, userState}) => {


    if (userState.loadingUsers) {
        return <div>Wait</div>
    }
    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todoState.status.map((status: any, index: any) => (
                    mapTicketList(
                        statusOfProgress(status, todoState),
                        status,
                        userState.users,
                        index !== 2,
                        userState.userAvatar,
                        checkProgressStatus(status),
                        dispatch
                    )
                ))}

            </div>
        </div>
    );
};

export default TicketList;