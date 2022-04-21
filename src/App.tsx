import React, {useState} from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss"

interface Props {
    todo: any,
    users: any,
    setUserAvatar: any,
    setInProgress : any,
    setDone: any,
    getLetterOfNameAndSecondName : any
}

const App: React.FC<Props> = ({todo ,users ,setUserAvatar, getLetterOfNameAndSecondName ,setDone ,setInProgress}) => {

    return (
        <div className="appContainer" >
            <TicketList setUserAvatar={setUserAvatar} todo={todo} users={users} getLetterOfNameAndSecondName={getLetterOfNameAndSecondName} setDone={setDone} setInProgress={setInProgress}/>
            <Board users={users} getLetterOfNameAndSecondName={getLetterOfNameAndSecondName} todo={todo} setDone={setDone} setInProgress={setInProgress} />
        </div>
    );
};

export default App;