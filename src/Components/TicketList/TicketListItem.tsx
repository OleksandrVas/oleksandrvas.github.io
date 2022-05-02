import React from "react";
import UserAvatar from "../UI/UserAvatar";

import { TodoActionTypes } from "../../types/todo";
import { checkValidProgress } from "../../utils/checkValidProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {
  setProgress:
    | string
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      })
    | null
    | undefined;
  text: string;
  status: string;
  id: number;
}

const TicketListItem: React.FC<Props> = ({ text, status, setProgress, id }) => {
  const { users, userAvatar } = useTypedSelector((state) => state.users);
  return (
    <div
      className="listItem"
      onClick={() => checkValidProgress(id, text, setProgress)}
    >
      <div className="col-xs-3">
        <UserAvatar userAvatar={userAvatar} id={id} users={users} />
      </div>
      <div className="col-xs-6">{text}</div>
      <div className="col-xs-3">{status}</div>
    </div>
  );
};

export default TicketListItem;
