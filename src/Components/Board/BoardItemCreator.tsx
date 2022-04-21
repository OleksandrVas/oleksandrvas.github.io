import React from 'react';
import BoardItem from "./BoardItem";

// @ts-ignore
import cl from "./Board.module.css"


interface Props {
    todo: any,
    users: any,
    setProgress:any
    getLetterOfNameAndSecondName: any,
    status: number,
    inProgress: any
}

const BoardItemCreator: React.FC<Props> = ({todo, users, inProgress, status,setProgress, getLetterOfNameAndSecondName}) => {
    return (
        <div className={cl.boardItemContainer}>
            <h3>{todo.status[status]}</h3>
            {inProgress.length != 0 ? inProgress.map((item: any) => (
                <BoardItem name={users.users[item.id - 1].name}
                           users={users}
                           setProgress = {setProgress}
                           getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                           key={item.id}
                           text={item.title}
                           id={item.id}/>
            )) : <div>Empty now</div> }
        </div>
    );
};

export default BoardItemCreator;