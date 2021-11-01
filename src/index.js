import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import {ConfigProvider} from "./components/config/ConfigContext";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
