import React from "react";
import BoardItem from "./BoardItem";
import { setProgressInItem } from "../../utils/setProgressInItem";
import { Dispatch } from "redux";
import { TodoActionTypes } from "../../types/todo";

interface Props {
  setProgress:
    | string
    | null
    | undefined
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      });
  status: string;
  inProgress: string | Array<{ id: number; title: string; completed: boolean }>;
  isProgress: boolean;
  dispatch: Dispatch;
}

const BoardItemCreator: React.FC<Props> = ({
  isProgress,
  inProgress,
  status,
  setProgress,
  dispatch,
}) => {
  return (
    <div className="boardItemCreator">
      <h3 className="boardItemStatus">{status}</h3>
      {inProgress.length !== 0
        ? typeof inProgress !== "string" &&
          inProgress.map(({ id, completed, title }) => (
            <BoardItem
              setProgress={setProgressInItem(
                isProgress,
                setProgress,
                id,
                title,
                dispatch
              )}
              key={id}
              text={title}
              id={id}
            />
          ))
        : "it's empty "}
    </div>
  );
};

export default BoardItemCreator;
