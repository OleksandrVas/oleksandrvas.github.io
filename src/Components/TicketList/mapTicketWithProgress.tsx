import TicketListItem from "./TicketListItem";
import React from "react";


export const mapTicketFunc = (todoProgress: any, status: any, setProgress: any) => {
    return todoProgress.map((item: any) => <TicketListItem key={item.id}
                                                           id={item.id}
                                                           setProgress={setProgress}
                                                           text={item.title} status={status}/>)
}
