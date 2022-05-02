import { setDone, setInProgress } from "../store/reducers/todoReducer";
import { todoState } from "../types/todo";

export const checkProgressStatus = (status: string) => {
  switch (status) {
    case "To do": {
      return setInProgress;
    }
    case "In Progress": {
      return setDone;
    }
    case "Done": {
      return null;
    }
    default: {
      return status;
    }
  }
};

export const statusOfProgress = (status: string, todoState: todoState) => {
  switch (status) {
    case "To do": {
      return todoState.todo;
    }
    case "In Progress": {
      return todoState.inProgress;
    }
    case "Done": {
      return todoState.done;
    }
    default: {
      return status;
    }
  }
};
