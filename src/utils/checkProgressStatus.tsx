import {setDone, setInProgress} from "../store/reducers/todoReducer";

export const checkProgressStatus = (status: any) => {
    switch (status) {
        case "To do": {
            return setInProgress
        }
        case "In Progress": {
            return setDone
        }
        case "Done" : {
            return null
        }
        default : {
            return;
        }
    }
}



 export  const statusOfProgress = (status: any , todoState : any) => {
    switch (status) {
        case "To do" : {
            return todoState.todo
        }
        case "In Progress": {
            return todoState.inProgress
        }
        case "Done" : {
            return todoState.done
        }
        default : {
            return;
        }
    }
}
