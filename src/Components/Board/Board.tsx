import React from "react";
import "../../Styles/Board.scss";
import BoardItemCreator from "./BoardItemCreator";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  checkProgressStatus,
  statusOfProgress,
} from "../../utils/checkProgressStatus";

interface Props {
  setProgressInItem: any;
}

const Board: React.FC<Props> = ({ setProgressInItem }) => {
  const todoState = useTypedSelector((state) => state.todo);
  const user = useTypedSelector((state) => state.users);
  return (
    <div className="boardContainer">
      <h1 className="boardTitle">Board</h1>
      <div className="boardItemContainer">
        {todoState.status.map((status: any, index: number) => (
          <BoardItemCreator
            isProgress={index !== 2}
            key={Math.random()}
            user={user}
            setProgressInItem={setProgressInItem}
            setProgress={checkProgressStatus(status)}
            inProgress={statusOfProgress(status, todoState)}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
