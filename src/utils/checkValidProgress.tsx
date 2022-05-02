import { TodoActionTypes } from "../types/todo";

export const checkValidProgress = (
  id: number,
  text: string,
  progress:
    | string
    | ((payload: { id: number; setTicket: { id: number; title: string } }) => {
        type: TodoActionTypes;
        payload: { id: number; setTicket: { id: number; title: string } };
      })
    | null
    | undefined
) => {
  if (typeof progress !== "string") {
    if (progress !== null) {
      if (progress !== undefined) {
        return progress({ id: id, setTicket: { id: id, title: text } });
      }
    }
  }
};
