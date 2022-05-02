import React from "react";
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss";

interface Props {
  setProgressInItem: any;
}

const App: React.FC<Props> = ({ setProgressInItem }) => {
  return (
    <div className="appContainer">
      <TicketList setProgressInItem={setProgressInItem} />
      <Board setProgressInItem={setProgressInItem} />
    </div>
  );
};

export default App;
