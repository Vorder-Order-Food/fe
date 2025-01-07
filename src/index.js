import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from "./context/AppContext";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./component/State/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContextProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContextProvider>
    </BrowserRouter>
);

