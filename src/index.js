import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "@/redux/rootReducer";

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
