import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"
import BoardItem from "./BoardItem";


interface Props {
    todo: any,
    setInProgress: any,
    setDone: any
}

const Board: React.FC<Props> = ({todo, setInProgress, setDone}) => {
    return (
        <>
            <h1>Board</h1>
            <div className={cl.boardContainer}>
                <div className={cl.boardItemContainer}>
                    <h3>{todo.status[0]}</h3>
                    {todo.todo.map((item: any) => (
                        <BoardItem text={item.title} id={item.id}/>
                    ))}
                </div>
                <div className={cl.boardItemContainer}>
                    <h3>{todo.status[1]}</h3>
                    {todo.inProgress.length != 0 ? todo.inProgress.map((item: any) => (
                            <BoardItem text={item.title} id={item.id}/>
                        ))
                        : <div>Now is empty</div>
                    }
                </div>
                <div className={cl.boardItemContainer}>
                    <h3>{todo.status[2]}</h3>
                    {todo.done.length != 0 ? todo.done.map((item: any) => (
                            <BoardItem text={item.title} id={item.id}/>
                        ))
                        : <div>Now is empty</div>
                    }
                </div>

            </div>
        </>
    );
};

export default Board;