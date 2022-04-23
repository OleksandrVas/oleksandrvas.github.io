import React from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss"

interface Props {
    todoState: any,
    userState: any,
    checkProgressStatus: any,
    setProgressInItem: any,
    statusOfProgress: any,
    getLetterOfNameAndSecondName: any,
}

const App: React.FC<Props> = ({
                                  getLetterOfNameAndSecondName,
                                  statusOfProgress,
                                  setProgressInItem,
                                  checkProgressStatus,
                                  todoState,
                                  userState,
                              }) => {


    return (
        <div className="appContainer">
            <TicketList getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                        checkProgressStatus={checkProgressStatus}
                        setProgressInItem={setProgressInItem}
                        statusOfProgress={statusOfProgress}
                        todoState={todoState}
                        userState={userState}/>
            <Board getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                   checkProgressStatus={checkProgressStatus}
                   statusOfProgress={statusOfProgress}
                   setProgressInItem={setProgressInItem}
                   todoState={todoState}
                   userState={userState}/>
        </div>
    );
};

export default App;