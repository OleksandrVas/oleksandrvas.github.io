import React from "react";
import "../../Styles/Board.scss";
import BoardItemCreator from "./BoardItemCreator";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  checkProgressStatus,
  statusOfProgress,
} from "../../utils/checkProgressStatus";
import { useDispatch } from "react-redux";

const Board: React.FC = () => {
  const todoState = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="boardContainer">
      <h1 className="boardTitle">Board</h1>
      <div className="boardItemContainer">
        {todoState.status.map((status: string, index: number) => (
          <BoardItemCreator
            isProgress={index !== 2}
            key={Math.random()}
            dispatch={dispatch}
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
