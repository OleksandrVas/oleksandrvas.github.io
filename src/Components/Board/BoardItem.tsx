import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"
import {Avatar} from "@mui/material";

interface Props {
    text: string,
    id: number,
    users: any,
    setProgress: any,
    name: string,
    getLetterOfNameAndSecondName: any
}

const BoardItem: React.FC<Props> = ({
                                        text = "empty",
                                        users,
                                        getLetterOfNameAndSecondName,
                                        id,
                                        name = "User",
                                        setProgress
                                    }) => {
    if (users.userAvatar.length === 0) {
        return <div>Wait</div>
    }
    return (
        <div onClick={() => setProgress({id: id, setTicket: {id: id, title: text}})} className={cl.boardItem}>
            <div className={cl.user}>
                <Avatar sx={{
                    bgcolor: users.userAvatar[id - 1].color,
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(name)}
                </Avatar>
            </div>

            <div className={cl.title}>{text}</div>
        </div>
    );
};

export default BoardItem