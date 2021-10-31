import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavBar} from "./components/NavBar";
import {ThemeProvider, useTheme} from "@mui/material";

function App() {
    const routes = useRoutes()
    const appTheme = useTheme()

    return (
        <ThemeProvider theme={appTheme}>
            <Router>
                <NavBar />
                {routes}
            </Router>
        </ThemeProvider>
    )
}

export default App
