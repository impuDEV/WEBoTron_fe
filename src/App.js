import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {NavBar} from "./components/NavBar";
import {CssBaseline, useMediaQuery} from "@mui/material";
import {Box, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ThemeProvider, useTheme, createTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Typography from "@mui/material/Typography";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ThemedApp() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const routes = useRoutes()

    const addCash = (amount) => {
        dispatch({type: "ADD_CASH", payload: amount})
    }

    const getCash = (amount) => {
        dispatch({type: "GET_CASH", payload: amount})
    }

    const theme = useTheme()
    const isColorModeLight = useSelector(state => state.config.lightMode)

    const colorMode = React.useContext(ColorModeContext)


    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <NavBar />
                <Box>
                    {routes}
                </Box>
                <Typography>
                    This is a <strong>{theme.palette.mode}</strong> mode theme with custom palette
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color={"inherit"}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>



                <Box sx={{fontSize: "3rem"}}>{cash}</Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Button
                        variant="outline"
                        onClick={() => addCash(Number(prompt()))}
                    >Пополнить счёт</Button>
                    <Button
                        variant="outline"
                        onClick={() => getCash(Number(prompt()))}
                    >Снять со счёта</Button>
                </Box>
            </Router>
        </ThemeProvider>

    )
}

export default function App() {
    const [mode, setMode] = React.useState('light')
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }), [],
    )

    const theme = React.useMemo(
        () => createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <ThemedApp />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
