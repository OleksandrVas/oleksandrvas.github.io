import React from "react";
import UserAvatar from "../UI/UserAvatar";
import { getLetterOfNameAndSecondName } from "../../utils/getLetterOfNameAndSecondName";

interface Props {
  text: string;
  status: string;
  userAvatar: any;
  setProgress: any;
  users: any[];
  id: number;
}

const TicketListItem: React.FC<Props> = ({
  userAvatar,
  text,
  status,
  setProgress,
  users,
  id,
}) => {
  return (
    <div className="listItem" onClick={setProgress}>
      <div className="col-xs-3">
        <UserAvatar
          userAvatar={userAvatar}
          id={id}
          getFirsLetterOfUser={getLetterOfNameAndSecondName}
          users={users}
        />
      </div>
      <div className="col-xs-6">{text}</div>
      <div className="col-xs-3">{status}</div>
    </div>
  );
};

export default TicketListItem;
