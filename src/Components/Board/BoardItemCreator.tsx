import React from 'react';
import BoardItem from "./BoardItem";


interface Props {
    userState: any,
    setProgress: any
    status: string,
    inProgress: any,
    dispatch: any,
    isProgress: boolean,
    getLetterOfNameAndSecondName:any,
}

const BoardItemCreator: React.FC<Props> = ({
                                               isProgress,
                                               userState,
                                               dispatch,
                                               inProgress,
                                               status,
                                               setProgress,
                                               getLetterOfNameAndSecondName,
                                           }) => {
    return (
        <div className="boardItemCreator">
            <h3 className="boardItemStatus">{status}</h3>
            {inProgress.length != 0 ? inProgress.map((item: any) => (
                <BoardItem name={userState.users[item.id - 1].name}
                           userAvatar={userState.userAvatar}
                           setProgress={isProgress  ?
                               () => dispatch(setProgress({id: item.id, setTicket: {id: item.id, title: item.title}}))
                               : null }
                           key={item.id}
                           text={item.title}
                           getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                           id={item.id}/>
            )) : "Just Do it "}
        </div>
    );
};

export default BoardItemCreator;