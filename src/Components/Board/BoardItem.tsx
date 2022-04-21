import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"
import {Avatar} from "@mui/material";
import {getLetterOfNameAndSecondName} from "../getLetterOfNameAndSecondName";
import {useDispatch} from "react-redux";

interface Props {
    text: string,
    id: number,
    userAvatar: any,
    setProgress: any,
    name: string,
}

const BoardItem: React.FC<Props> = ({
                                        text = "empty",
                                        userAvatar,
                                        id,
                                        name = "User",
                                        setProgress
                                    }) => {


    const dispatch = useDispatch()

    if (userAvatar.length === 0) {
        return <div>Wait</div>
    }
    return (
        <div onClick={() => dispatch<any>(setProgress({id: id, setTicket: {id: id, title: text}}))}
             className={cl.boardItem}>
            <div className={cl.user}>
                <Avatar sx={{
                    bgcolor: userAvatar[id - 1].color,
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