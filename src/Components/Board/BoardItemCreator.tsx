import React from 'react';
import BoardItem from "./BoardItem";

// @ts-ignore
import cl from "./Board.module.css"


interface Props {
    users: any,
    setProgress:any
    status: any,
    inProgress: any
    userAvatar:any,
    statusNumber:number
}

const BoardItemCreator: React.FC<Props> = ({ users, userAvatar,inProgress, status,statusNumber,setProgress}) => {
    return (
        <div className={cl.boardItemContainer}>
            <h3>{status[statusNumber]}</h3>
            {inProgress.length != 0 ? inProgress.map((item: any) => (
                <BoardItem name={users[item.id - 1].name}
                           userAvatar={userAvatar}
                           setProgress = {setProgress}
                           key={item.id}
                           text={item.title}
                           id={item.id}/>
            )) : <div>Empty now</div> }
        </div>
    );
};

export default BoardItemCreator;