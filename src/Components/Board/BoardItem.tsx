import React from 'react';
import {Avatar} from "@mui/material";

interface Props {
    text: string,
    id: number,
    userAvatar: any,
    setProgress: any,
    name: string,
    getLetterOfNameAndSecondName: any,

}

const BoardItem: React.FC<Props> = ({
                                        text,
                                        userAvatar,
                                        id,
                                        name,
                                        setProgress,
                                        getLetterOfNameAndSecondName,
                                    }) => {

    return (

        <div onClick={setProgress}
             className="boardItem">
            <div className="boardItemAvatar">
                <Avatar sx={{
                    bgcolor: (userAvatar[id - 1].color),
                    padding: "25px"
                }}>
                    {getLetterOfNameAndSecondName(name)}
                </Avatar>
            </div>
            <div className="boardItemText">{text.length >= 20 ? text.slice(0, 30) + "..." : text}</div>
        </div>
    );
};

export default BoardItem