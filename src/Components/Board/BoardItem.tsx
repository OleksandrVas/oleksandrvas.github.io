import React from 'react';
// @ts-ignore
import cl from "./Board.module.css"

interface Props {
    text: string,
    id: number
}

const BoardItem: React.FC<Props> = ({text, id}) => {
    return (
        <div className={cl.boardItem}>
            <div className={cl.user}>User</div>
            <div className={cl.title}>{text}</div>
        </div>
    );
};

export default BoardItem