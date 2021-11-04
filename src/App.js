import React, {useMemo, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavBar} from "./components/NavBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {useConfig} from "./components/config/ConfigContext";


function App() {
    const routes = useRoutes()

    const {colorTheme} = useConfig()

    const appTheme = useMemo(
        () => createTheme({
            palette: {
                mode: colorTheme
            }
        }), [colorTheme]
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
