import TicketListItem from "./TicketListItem";
import React from "react";


export const mapTicketList = (todoProgress: any,
                              status: string,
                              users: any,
                              isInProcess: boolean,
                              userAvatar: any,
                              progress: any,
                              getLetterOfNameAndSecondName: any,
                              setProgressInItem: any,
) => {
    return todoProgress.length !== 0 ?
        todoProgress.map((item: any) => <TicketListItem key={item.id}
                                                        getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                                                        id={item.id}
                                                        setProgress={setProgressInItem(isInProcess, progress, item.id, item.title)}
                                                        userAvatar={userAvatar}
                                                        users={users}
                                                        text={item.title}
                                                        status={status}/>)
        : ""
}
