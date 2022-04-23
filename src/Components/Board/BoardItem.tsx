import React from 'react';
import {Avatar} from "@mui/material";
import UserAvatar from "../UI/UserAvatar";

interface Props {
    text: string,
    id: number,
    userAvatar: any,
    setProgress: any,
    getLetterOfNameAndSecondName: any,
    users: any,
}

const BoardItem: React.FC<Props> = ({
                                        users,
                                        text,
                                        userAvatar,
                                        id,
                                        setProgress,
                                        getLetterOfNameAndSecondName,
                                    }) => {

    return (

        <div onClick={setProgress}
             className="boardItem">
            <div className="boardItemAvatar">
                <UserAvatar userAvatar={userAvatar}
                            id={id}
                            getFirsLetterOfUser={getLetterOfNameAndSecondName}
                            users={users}
                />
            </div>
            <div className="boardItemText">{text.length >= 20 ? text.slice(0, 30) + "..." : text}</div>
        </div>
    );
};

export default BoardItem