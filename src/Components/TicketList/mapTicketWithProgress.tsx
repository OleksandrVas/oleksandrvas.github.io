import TicketListItem from "./TicketListItem";
import React from "react";


export const mapTicketFunc = (todoProgress: any, status: any, setProgress: any , getLetterOfNameAndSecondName : any ,users: any ,setUserAvatar : any)  => {
    return todoProgress.map((item: any) => <TicketListItem key={item.id}
                                                           setUserAvatar={setUserAvatar}
                                                           getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                                           id={item.id}
                                                           users={users }
                                                           setProgress={setProgress}
                                                           text={item.title} status={status}/>)
}
