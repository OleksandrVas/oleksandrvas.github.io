import React from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";

interface Props {
    todo: any,
    users: any,
    setInProgress : any,
    setDone: any
}

const App: React.FC<Props> = ({todo ,users ,setDone ,setInProgress}) => {
    return (
        <>
            <TicketList todo={todo} setDone={setDone} setInProgress={setInProgress}/>
            <Board  todo={todo} setDone={setDone} setInProgress={setInProgress} />
        </>
    );
};

export default App;