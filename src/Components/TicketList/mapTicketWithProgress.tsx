import TicketListItem from "./TicketListItem";
import React from "react";
import { setProgressInItem } from "../../utils/setProgressInItem";
import { Dispatch } from "redux";
import { TodoActionTypes } from "../../types/todo";

export const mapTicketList = (
  todoProgress:
    | Array<{ userId: number; id: number; title: string; completed: boolean }>
    | string,
  status: string,
  isInProcess: boolean,
  progress:
    | string
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      })
    | null
    | undefined,
  dispatch: Dispatch
) => {
  return todoProgress.length !== 0
    ? typeof todoProgress !== "string"
      ? todoProgress?.map(({ id, title }) => (
          <TicketListItem
            key={id}
            id={id}
            setProgress={setProgressInItem(
              isInProcess,
              progress,
              id,
              title,
              dispatch
            )}
            text={title}
            status={status}
          />
        ))
      : ""
    : "";
};
