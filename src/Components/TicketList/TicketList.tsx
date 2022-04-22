import React from 'react';
import "../../Styles/TicketList.scss"
import {mapTicketList} from "./mapTicketWithProgress";
import Preloader from "../UI/Preloader";

interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
    statusOfProgress: any,
    checkProgressStatus: any,
    getLetterOfNameAndSecondName: any
}


const TicketList: React.FC<Props> = ({
                                         dispatch,
                                         getLetterOfNameAndSecondName,
                                         statusOfProgress,
                                         checkProgressStatus,
                                         todoState,
                                         userState
                                     }) => {


    if (userState.loadingUsers) {
        return <Preloader/>
    }
    return (
        <div className="ticketListContainer">
            <h1 className="ticketTitle"> Ticket List </h1>
            <div className="ticketListItems">
                {todoState.status.map((status: any, index: number) => (
                    mapTicketList(
                        statusOfProgress(status, todoState),
                        status,
                        userState.users,
                        index !== 2,
                        userState.userAvatar,
                        checkProgressStatus(status),
                        dispatch,
                        getLetterOfNameAndSecondName,
                    )
                ))}

            </div>
        </div>
    );
};

export default TicketList;