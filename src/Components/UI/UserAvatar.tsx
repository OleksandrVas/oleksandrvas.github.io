import React from 'react';
import {Avatar} from "@mui/material";


interface Props {
    userAvatar: any,
    id: number,
    getFirsLetterOfUser: any,
    users: any,
}

const UserAvatar: React.FC<Props> = ({userAvatar, id, getFirsLetterOfUser, users}) => {
    return (
        <Avatar sx={{
            bgcolor: (userAvatar[id - 1].color || "black"),
            padding: "25px"
        }}>
            {getFirsLetterOfUser(users[id - 1].name)}
        </Avatar>
    );
};

export default UserAvatar;