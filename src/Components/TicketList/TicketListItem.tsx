import {Avatar} from '@mui/material';
import React from 'react';
import "../../Styles/TicketList.scss"


interface Props {
    text: string,
    status: string,
    userAvatar: any,
    setProgress: any,
    users: any[],
    id: number,
    getLetterOfNameAndSecondName: any,
}


const TicketListItem: React.FC<Props> = ({
                                             userAvatar,
                                             text,
                                             status,
                                             setProgress,
                                             users,
                                             id,
                                             getLetterOfNameAndSecondName,
                                         }) => {
    return (
        <div className="listItem" onClick={setProgress}>
            <div className="col-xs-3">
                <Avatar sx={{
                    bgcolor: (userAvatar[id - 1].color || "black"),
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(users[id - 1].name)}
                </Avatar>
            </div>
            <div className="col-xs-6">{text}</div>
            <div className="col-xs-3">
                {status}
            </div>
        </div>
    );
};

export default TicketListItem;