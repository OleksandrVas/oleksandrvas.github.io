import TicketListItem from "./TicketListItem";
import React from "react";


export const mapTicketFunc = (todoProgress: any, status: any,  users: any , inProgress:any , userAvatar:any , progress:any)  => {
    return todoProgress.map((item: any) => <TicketListItem key={item.id}
                                                           id={item.id}
                                                           progress={progress}
                                                           userAvatar={userAvatar}
                                                           users={users }
                                                           inProgress={inProgress}
                                                           text={item.title} status={status}/>)
}
