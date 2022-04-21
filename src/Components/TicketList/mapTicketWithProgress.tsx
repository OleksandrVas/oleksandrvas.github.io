import TicketListItem from "./TicketListItem";
import React from "react";


export const mapTicketList = (todoProgress: any,
                              status: any,
                              users: any,
                              inProgress: any,
                              userAvatar: any,
                              progress: any,
                              dispatch: any
) => {
    return todoProgress.map((item: any) => <TicketListItem key={item.id}
                                                           id={item.id}
                                                           dispatch={dispatch}
                                                           progress={progress}
                                                           userAvatar={userAvatar}
                                                           users={users}
                                                           inProgress={inProgress}
                                                           text={item.title} status={status}/>)
}
