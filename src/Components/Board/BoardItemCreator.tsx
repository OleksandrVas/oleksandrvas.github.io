import React from 'react';
import BoardItem from "./BoardItem";


interface Props {
    userState: any,
    setProgress: any
    status: any,
    inProgress: any,
    dispatch: any
}

const BoardItemCreator: React.FC<Props> = ({
                                               userState,
                                               dispatch,
                                               inProgress,
                                               status,
                                               setProgress
                                           }) => {

    return (
        <div className="boardItemCreator">
            <h3 className="boardItemStatus">{status}</h3>
            {inProgress.length != 0 ? inProgress.map((item: any) => (
                <BoardItem name={userState.users[item.id - 1].name}
                           userAvatar={userState.userAvatar}
                           dispatch={dispatch}
                           setProgress={setProgress}
                           key={item.id}
                           text={item.title}
                           id={item.id}/>
            )) : <div>Nice!</div>}
        </div>
    );
};

export default BoardItemCreator;