import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"
import BoardItem from "./BoardItem";
import BoardItemCreator from "./BoardItemCreator";


interface Props {
    todo: any,
    setInProgress: any,
    setDone: any,
    users: any,
    getLetterOfNameAndSecondName: any
}

const Board: React.FC<Props> = ({todo, getLetterOfNameAndSecondName, setInProgress, setDone, users}) => {
    if (users.loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <>
            <h1>Board</h1>

            <div className={cl.boardContainer}>
                <BoardItemCreator todo={todo}
                                  setProgress={setInProgress}
                                  users={users}
                                  getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                  status={0} inProgress={todo.todo}/>
                <BoardItemCreator todo={todo}
                                  users={users}
                                  setProgress={setDone}
                                  getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                  status={1} inProgress={todo.inProgress}/>

                <BoardItemCreator todo={todo}
                                  users={users}
                                  setProgress={null}
                                  getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                  status={2} inProgress={todo.done}/>
            </div>
        </>
    );
};

export default Board;