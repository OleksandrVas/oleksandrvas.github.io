import React from "react";
import "../../Styles/TicketList.scss";
import { mapTicketList } from "./mapTicketWithProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  statusOfProgress,
  checkProgressStatus,
} from "../../utils/checkProgressStatus";
import { useDispatch } from "react-redux";

const TicketList: React.FC = () => {
  const todoState = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="ticketListContainer">
      <h1 className="ticketTitle"> Ticket List </h1>
      <div className="ticketListItems">
        {todoState.status.map((status: string, index: number) =>
          mapTicketList(
            statusOfProgress(status, todoState),
            status,
            index !== 2,
            checkProgressStatus(status),
            dispatch
          )
        )}
      </div>
    </div>
  );
};

export default TicketList;
