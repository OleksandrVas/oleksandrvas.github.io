import {Avatar} from '@mui/material';
import React, {useEffect} from 'react';
import "../../Styles/TicketList.scss"
import Button from "../UI/Button";
import {deepOrange, deepPurple} from "@mui/material/colors";
import {setUserAvatar} from "../../store/reducers/userReducer";

interface Props {
    text: string,
    status: string,
    setProgress: any,
    users: any,
    id: number,
    setUserAvatar: any,
    getLetterOfNameAndSecondName: any
}


const TicketListItem: React.FC<Props> = ({
                                             text,
                                             setUserAvatar,
                                             getLetterOfNameAndSecondName,
                                             status,
                                             users,
                                             setProgress,
                                             id
                                         }) => {


    const color = function generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    useEffect(() => {
        setUserAvatar({color: color()})
    }, [])

    if (users.userAvatar.length === 0) {
        return <div>wait</div>
    }
    return (
        <div className="listItem">
            <div className="col-xs-3">
                <Avatar sx={{
                    bgcolor: users.userAvatar[id - 1].color ,
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(users.users[id - 1].name)}
                </Avatar>
            </div>
            <div className="col-xs-6">{text}</div>
            <div className="col-xs-3">
                <Button children={status} onHandleClick={setProgress != null ?
                    () => setProgress({id: id, setTicket: {id: id, title: text}})
                    : () => null}/>
            </div>


        </div>
    );
};

export default TicketListItem;