import React from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss"

interface Props {
    dispatch:any,
    todoState:any,
    userState:any,
    checkProgressStatus:any,
    statusOfProgress:any
}

const App: React.FC<Props> = ({dispatch , statusOfProgress,checkProgressStatus, todoState ,userState }) => {
    return (
        <div className="appContainer">
            <TicketList dispatch={dispatch} checkProgressStatus={checkProgressStatus} statusOfProgress={statusOfProgress} todoState={todoState} userState={userState} />
            <Board checkProgressStatus={checkProgressStatus} statusOfProgress={statusOfProgress} dispatch={dispatch} todoState={todoState} userState={userState}/>
        </div>
    );
};

export default App;