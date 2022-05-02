import React from "react";
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss";

const App: React.FC = () => {
  return (
    <div className="appContainer">
      <TicketList />
      <Board />
    </div>
  );
};

export default App;
