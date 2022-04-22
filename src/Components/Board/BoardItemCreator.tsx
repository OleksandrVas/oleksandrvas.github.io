import React from 'react';
import BoardItem from "./BoardItem";


interface Props {
    userState: any,
    setProgress: any
    status: any,
    inProgress: any,
    dispatch: any,
    isProgress: any,
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
                           setProgress={isProgress === true  ?
                               () => dispatch(setProgress({id: item.id, setTicket: {id: item.id, title: item.title}}))
                               : null }
                           key={item.id}
                           text={item.title}
                           getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                           id={item.id}/>
            )) : <div>Nice!</div>}
        </div>
    );
};

export default BoardItemCreator;