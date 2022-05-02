import React from "react";
import UserAvatar from "../UI/UserAvatar";
import { getLetterOfNameAndSecondName } from "../../utils/getLetterOfNameAndSecondName";

interface Props {
  text: string;
  id: number;
  userAvatar: any;
  setProgress: any;
  users: any;
}

const BoardItem: React.FC<Props> = ({
  users,
  text,
  userAvatar,
  id,
  setProgress,
}) => {
  return (
    <div onClick={setProgress} className="boardItem">
      <div className="boardItemAvatar">
        <UserAvatar
          userAvatar={userAvatar}
          id={id}
          getFirsLetterOfUser={getLetterOfNameAndSecondName}
          users={users}
        />
      </div>
      <div className="boardItemText">
        {text.length >= 20 ? text.slice(0, 30) + "..." : text}
      </div>
    </div>
  );
};

export default BoardItem;
