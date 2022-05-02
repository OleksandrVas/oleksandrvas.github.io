import React from "react";
import { Avatar } from "@mui/material";
import { getLetterOfNameAndSecondName } from "../../utils/getLetterOfNameAndSecondName";

interface Props {
  id: number;
  userAvatar: Array<{ color: number }>;
  users: Array<{
    id: number;
    name: string;
    username: string;
    website: string;
    phone: string;
    email: string;
    company: { bs: string; catchPhrase: string; name: string };
    address: {
      city: string;
      geo: { lat: string; lng: string };
      street: string;
      suite: string;
      zipcode: string;
    };
  }>;
}

const UserAvatar: React.FC<Props> = ({ userAvatar, id, users }) => {
  return (
    <Avatar
      sx={{
        bgcolor: userAvatar[id - 1].color || "black",
        padding: "25px",
      }}
    >
      {getLetterOfNameAndSecondName(users[id - 1].name)}
    </Avatar>
  );
};

export default UserAvatar;
