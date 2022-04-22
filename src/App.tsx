import React from 'react';
import TicketList from "./Components/TicketList/TicketList";
import Board from "./Components/Board/Board";
import "./Styles/App.scss"

interface Props {
    dispatch: any,
    todoState: any,
    userState: any,
    checkProgressStatus: any,
    statusOfProgress: any,
    getLetterOfNameAndSecondName: any,
}

const App: React.FC<Props> = ({
                                  dispatch,
                                  getLetterOfNameAndSecondName,
                                  statusOfProgress,
                                  checkProgressStatus,
                                  todoState,
                                  userState,
                              }) => {
    return (
        <div className="appContainer">
            <TicketList getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                        dispatch={dispatch}
                        checkProgressStatus={checkProgressStatus}
                        statusOfProgress={statusOfProgress}
                        todoState={todoState}
                        userState={userState}/>
            <Board getLetterOfNameAndSecondName={getLetterOfNameAndSecondName}
                   checkProgressStatus={checkProgressStatus}
                   statusOfProgress={statusOfProgress}
                   dispatch={dispatch}
                   todoState={todoState}
                   userState={userState}/>
        </div>
    );
};

export default App;