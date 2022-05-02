import React from "react";
import UserAvatar from "../UI/UserAvatar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TodoActionTypes } from "../../types/todo";
import { checkValidProgress } from "../../utils/checkValidProgress";

interface Props {
  text: string;
  id: number;
  setProgress:
    | string
    | null
    | undefined
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      });
}

const BoardItem: React.FC<Props> = ({ text, id, setProgress }) => {
  const { users, userAvatar } = useTypedSelector((state) => state.users);
  return (
    <div
      onClick={() => checkValidProgress(id, text, setProgress)}
      className="boardItem"
    >
      <div className="boardItemAvatar">
        <UserAvatar userAvatar={userAvatar} id={id} users={users} />
      </div>
      <div className="boardItemText">
        {text.length >= 20 ? text.slice(0, 30) + "..." : text}
      </div>
    </div>
  );
};

export default BoardItem;
