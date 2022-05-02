import React from "react";
import "../../Styles/TicketList.scss";
import { mapTicketList } from "./mapTicketWithProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  statusOfProgress,
  checkProgressStatus,
} from "../../utils/checkProgressStatus";

interface Props {
  setProgressInItem: any;
}

const TicketList: React.FC<Props> = ({ setProgressInItem }) => {
  const todoState = useTypedSelector((state) => state.todo);
  const { users, userAvatar } = useTypedSelector((state) => state.users);

  return (
    <div className="ticketListContainer">
      <h1 className="ticketTitle"> Ticket List </h1>
      <div className="ticketListItems">
        {todoState.status.map((status: string, index: number) =>
          mapTicketList(
            statusOfProgress(status, todoState),
            status,
            users,
            index !== 2,
            userAvatar,
            checkProgressStatus(status),
            setProgressInItem
          )
        )}
      </div>
    </div>
  );
};

export default TicketList;
