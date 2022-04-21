import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"
import BoardItemCreator from "./BoardItemCreator";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {setDone, setInProgress} from "../../store/reducers/todoReducer";


interface Props {

}

const Board: React.FC<Props> = ({}) => {
    const {status, inProgress, todo, done} = useTypedSelector(state => state.todo)
    const {userAvatar, users, loadingUsers} = useTypedSelector(state => state.users)

    if (loadingUsers) {
        return <div>Wait</div>
    }

    return (
        <>
            <h1>Board</h1>

            <div className={cl.boardContainer}>
                <BoardItemCreator
                    setProgress={setInProgress}
                    statusNumber={0}
                    userAvatar={userAvatar}
                    users={users}
                    status={status} inProgress={todo}/>
                <BoardItemCreator
                    users={users}
                    userAvatar={userAvatar}
                    statusNumber={1}
                    setProgress={setDone}
                    status={status} inProgress={inProgress}/>

                <BoardItemCreator
                    users={users}
                    userAvatar={userAvatar}
                    setProgress={null}
                    statusNumber={2}
                    status={status} inProgress={done}/>
            </div>
        </>
    );
};

export default Board;