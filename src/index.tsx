import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./store";
import AppContainer from "./Components/AppContainer";
import "./Styles/Index.scss"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>

);