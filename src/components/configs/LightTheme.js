import React from 'react'
import {useTheme} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import {useDispatch, useSelector} from "react-redux";
import {toggleLightModeAction} from "../../store/configReducer";

const LightTheme = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const colorMode = useSelector(state => state.config.lightMode)


    const switchLight = () => {
        dispatch(toggleLightModeAction())
        // console.log(theme.palette.mode)
        // console.log('Theme mode is light? - ', colorMode)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3
            }}
        >
            {theme.palette.mode} mode
            <IconButton color="inherit" sx={{ ml: 1 }} onClick={switchLight}>
                {theme.palette.mode === 'light' ? <Brightness4Icon /> :  <Brightness7Icon />}
            </IconButton>
        </Box>
    );
};

export default LightTheme;