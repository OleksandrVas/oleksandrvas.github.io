import {Avatar} from '@mui/material';
import React, {useEffect} from 'react';
import "../../Styles/TicketList.scss"
import Button from "../UI/Button";
import {setUserAvatar} from "../../store/reducers/userReducer";
import {useDispatch} from "react-redux";
import {getLetterOfNameAndSecondName} from "../getLetterOfNameAndSecondName";
import {color} from "../getColor";

interface Props {
    text: string,
    status: string,
    inProgress: any
    userAvatar: any,
    progress: any,
    users: any,
    id: number,
}


const TicketListItem: React.FC<Props> = ({
                                             userAvatar,
                                             text,
                                             status,
                                             progress,
                                             users,
                                             id,
                                             inProgress
                                         }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(setUserAvatar({color: color()}))
    }, [])


    console.log()
    if (userAvatar.length === 0) {
        return <div>wait</div>
    }

    return (
        <div className="listItem">
            <div className="col-xs-3">
                <Avatar sx={{
                    bgcolor: userAvatar[id - 1].color,
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(users[id - 1].name)}
                </Avatar>
            </div>
            <div className="col-xs-6">{text}</div>
            <div className="col-xs-3">
                <Button children={status} onHandleClick={inProgress != null ?
                    () => dispatch<any>(progress({id: id, setTicket: {id: id, title: text}}))
                    : null
                }/>
            </div>


        </div>
    );
};

export default TicketListItem;