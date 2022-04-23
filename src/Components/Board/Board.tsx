import React from 'react';
import "../../Styles/Board.scss"
import BoardItemCreator from "./BoardItemCreator";


interface Props {
    todoState: any,
    userState: any,
    setProgressInItem: any,
    statusOfProgress: any,
    checkProgressStatus: any,
    getLetterOfNameAndSecondName: any,
}

const Board: React.FC<Props> = ({
                                    getLetterOfNameAndSecondName,
                                    statusOfProgress,
                                    setProgressInItem,
                                    todoState,
                                    checkProgressStatus,
                                    userState
                                }) => {
    return (
        <div className="boardContainer">
            <h1 className="boardTitle">Board</h1>
            <div className="boardItemContainer">
                {todoState.status.map((status: any, index: number) => (
                    <BoardItemCreator userState={userState}
                                      getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                      isProgress={index !== 2}
                                      key={Math.random()}
                                      setProgressInItem={setProgressInItem}
                                      setProgress={checkProgressStatus(status)}
                                      inProgress={statusOfProgress(status, todoState)}
                                      status={status}/>
                ))}
            </div>
        </div>
    );
};

export default Board;