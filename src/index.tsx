import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./store";
import AppContainer from "./Components/AppContainer";
import "./Styles/Index.scss"
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>

    </Provider>
);