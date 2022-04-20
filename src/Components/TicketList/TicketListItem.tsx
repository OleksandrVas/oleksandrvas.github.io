import React from 'react';
// @ts-ignore
import cl from "./TicketList.module.css"

interface Props {
    text: string,
    status: string,
    setProgress: any,
    id: number,
}


const TicketListItem: React.FC<Props> = ({text, status, setProgress, id}) => {

    return (
        <div className={cl.item}>
            <div className={cl.itemXs3}>Photo</div>
            <div className={cl.itemXs6}>{text}</div>
            <button className={cl.itemXs3}
                    onClick={setProgress != null ?
                        () => setProgress({id: id, setTicket: {id: id, title: text}})
                        : () => null}>
                {status}
            </button>
        </div>
    );
};

export default TicketListItem;