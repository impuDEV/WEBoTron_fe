import React, {useMemo, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavBar} from "./components/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";



function App() {
    const routes = useRoutes()

    const theme = useSelector(state => state.config.colorTheme)

    const appTheme = useMemo(
        () => createTheme({
            palette: {
                mode: theme
            }
        }), //[config]

    )

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
