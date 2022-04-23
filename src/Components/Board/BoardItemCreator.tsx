import React from 'react';
import BoardItem from "./BoardItem";


interface Props {
    userState: any,
    setProgress: any
    status: string,
    inProgress: any,
    setProgressInItem: any,
    isProgress: boolean,
    getLetterOfNameAndSecondName: any,
}

const BoardItemCreator: React.FC<Props> = ({
                                               isProgress,
                                               userState,
                                               setProgressInItem,
                                               inProgress,
                                               status,
                                               setProgress,
                                               getLetterOfNameAndSecondName,
                                           }) => {
    return (
        <div className="boardItemCreator">
            <h3 className="boardItemStatus">{status}</h3>
            {inProgress.length !== 0 ? inProgress.map((item: any) => (
                <BoardItem name={userState.users[item.id - 1].name}
                           userAvatar={userState.userAvatar}
                           setProgress={setProgressInItem(isProgress, setProgress, item.id, item.title)}
                           key={item.id}
                           text={item.title}
                           getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                           id={item.id}/>
            )) : "Just Do It "}
        </div>
    );
};

export default BoardItemCreator;