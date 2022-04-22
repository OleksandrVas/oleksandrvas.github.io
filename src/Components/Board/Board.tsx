import React from 'react';
import "../../Styles/Board.scss"
import BoardItemCreator from "./BoardItemCreator";
import Preloader from "../UI/Preloader";


interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
    statusOfProgress: any,
    checkProgressStatus: any,
    getLetterOfNameAndSecondName: any,
}

const Board: React.FC<Props> = ({
                                    dispatch,
                                    getLetterOfNameAndSecondName,
                                    statusOfProgress,
                                    todoState,
                                    checkProgressStatus,
                                    userState
                                }) => {
    if (userState.loadingUsers) {
        return <Preloader/>
    }
    return (
        <div className="boardContainer">
            <h1 className="boardTitle">Board</h1>
            <div className="boardItemContainer">
                {todoState.status.map((status: any, index: number) => (
                    <BoardItemCreator userState={userState}
                                      getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                      isProgress={index != 2}
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