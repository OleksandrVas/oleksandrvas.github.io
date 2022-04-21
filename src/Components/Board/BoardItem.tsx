import React from 'react';
import {Avatar} from "@mui/material";
import {getLetterOfNameAndSecondName} from "../getLetterOfNameAndSecondName";

interface Props {
    text: string,
    id: number,
    userAvatar: any,
    setProgress: any,
    name: string,
    dispatch:any
}

const BoardItem: React.FC<Props> = ({
                                        text = "empty",
                                        userAvatar,
                                        id,
                                        name = "User",
                                        setProgress,
                                        dispatch
                                    }) => {



    if (userAvatar.length <1) {
        return <div>Wait</div>
    }
    return (
        <div onClick={() => dispatch(setProgress({id: id, setTicket: {id: id, title: text}}))}
             className="boardItem">
            <div className="boardItemAvatar" >
                <Avatar sx={{
                    bgcolor: (userAvatar[id - 1].color),
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(name)}
                </Avatar>
            </div>

            <div className="boardItemText" >{text}</div>
        </div>
    );
};

export default BoardItem