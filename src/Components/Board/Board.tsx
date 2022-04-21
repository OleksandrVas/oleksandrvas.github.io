import React from 'react';
import "../../Styles/Board.scss"
import BoardItemCreator from "./BoardItemCreator";


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
                {todoState.status.map((status: any, index: any) => (
                    <BoardItemCreator userState={userState}
                                      isProgress={index  != 2 }
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