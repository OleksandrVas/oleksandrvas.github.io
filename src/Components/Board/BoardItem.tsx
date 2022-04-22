import React from 'react';
import {Avatar} from "@mui/material";

interface Props {
    text: any,
    id: any,
    userAvatar: any,
    setProgress: any,
    name: any,
    getLetterOfNameAndSecondName:any,

}

const BoardItem: React.FC<Props> = ({
                                        text ,
                                        userAvatar,
                                        id,
                                        name ,
                                        setProgress,
                                        getLetterOfNameAndSecondName,
                                    }) => {
    if (userAvatar.length < 1) {
        return <div>Wait</div>
    }
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
            <div className="boardItemText">{text}</div>
        </div>
    );
};

export default BoardItem