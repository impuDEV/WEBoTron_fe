import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavBar} from "./components/NavBar";
import Box from "@mui/material/Box";

function App() {
    const routes = useRoutes()

    return (
        <Router>
            <NavBar />
            <Box>
                {routes}
            </Box>
        </Router>
    )
}

export default App
