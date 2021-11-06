import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "@/redux/rootReducer";

document.getElementById('appLoader').style.display = 'none'

const store = createStore(rootReducer, compose (
    applyMiddleware(
        thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
const app = (
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
  document.getElementById('root')
);
