import { Dispatch } from "redux";
import { TodoActionTypes } from "../types/todo";

export const setProgressInItem = (
  isProgress: boolean,
  setProgress:
    | string
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      })
    | null
    | undefined,
  id: number,
  text: string,
  dispatch: Dispatch
) => {
  if (setProgress !== null) {
    if (setProgress !== undefined) {
      if (typeof setProgress !== "string") {
        return () =>
          dispatch(setProgress({ id: id, setTicket: { id: id, title: text } }));
      }
    }
  }
  return null;
};
