import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useDispatch, useSelector} from "react-redux";
import {toggleLightTheme} from "@/redux/configActions";

const ThemeMenuItem = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.config.colorTheme)

    return (
        <MenuItem onClick={() => dispatch(toggleLightTheme())}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
            {theme} mode
        </MenuItem>
    )
}

export default ThemeMenuItem