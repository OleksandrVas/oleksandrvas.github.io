import React from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss"

interface Props {
    setProgressInItem: any,
}

const App: React.FC<Props> = ({
                                  setProgressInItem,
                              }) => {


    return (
        <div className="appContainer">
            <TicketList
                setProgressInItem={setProgressInItem}
            />
            {/*<Board*/}
            {/*    getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}*/}
            {/*    checkProgressStatus={checkProgressStatus}*/}
            {/*    statusOfProgress={statusOfProgress}*/}
            {/*    setProgressInItem={setProgressInItem}*/}
            {/*    todoState={todoState}*/}
            {/*    userState={userState}/>*/}
        </div>
    );
};

export default App;