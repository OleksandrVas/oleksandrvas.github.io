import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketList} from "./mapTicketWithProgress";

interface Props {
    todoState: any,
    userState: any,
    statusOfProgress: any,
    checkProgressStatus: any,
    setProgressInItem: any,
    getLetterOfNameAndSecondName: any
}


const TicketList: React.FC<Props> = ({
                                         setProgressInItem,
                                         getLetterOfNameAndSecondName,
                                         statusOfProgress,
                                         checkProgressStatus,
                                         todoState,
                                         userState
                                     }) => {

    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todoState.status.map((status: string, index: number) => (
                    mapTicketList(
                        statusOfProgress(status, todoState),
                        status,
                        userState.users,
                        index !== 2,
                        userState.userAvatar,
                        checkProgressStatus(status),
                        getLetterOfNameAndSecondName,
                        setProgressInItem
                    )
                ))}

            </div>
        </div>
    );
};

export default TicketList;