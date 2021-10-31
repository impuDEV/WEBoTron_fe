import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {IconButton, Menu, MenuItem, Divider, useTheme,} from "@mui/material";
import {Settings} from "@mui/icons-material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ConfigMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const appTheme = useTheme()

    return (
        <React.Fragment>
            <IconButton color="inherit" onClick={handleClick} sx={{ ml:2 }}>
                <Settings fontSize="medium" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem>test</MenuItem>
                <Divider />
                <MenuItem>
                    {appTheme.palette.mode} mode
                    {appTheme.palette.mode == 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default ConfigMenu;