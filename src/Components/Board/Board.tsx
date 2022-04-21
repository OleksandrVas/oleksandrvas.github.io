import React from 'react';
import "../../Styles/Board.scss"
import BoardItemCreator from "./BoardItemCreator";
import {setDone, setInProgress} from "../../store/reducers/todoReducer";
import {log} from "util";


interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
    statusOfProgress: any,
    checkProgressStatus: any,
}

const Board: React.FC<Props> = ({dispatch, statusOfProgress, todoState, checkProgressStatus, userState}) => {

    if (userState.loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <div className="boardContainer">
            <h1 className="boardTitle">Board</h1>
            <div className="boardItemContainer">

                {todoState.status.map((status: any) => (
                    <BoardItemCreator userState={userState}
                                      key={Math.random()}
                                      setProgress={checkProgressStatus(status)}
                                      inProgress={statusOfProgress(status, todoState)}
                                      status={status}
                                      dispatch={dispatch}/>
                ))}

            </div>
        </div>
    );
};

export default Board;