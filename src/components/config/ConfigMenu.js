import React, {useContext, useState} from 'react';
import {IconButton, Menu, MenuItem, Divider, } from "@mui/material";
import {Settings} from "@mui/icons-material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useConfig} from "./ConfigContext";

const ConfigMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const config = useConfig()
    // console.log(config)

    return (
        <React.Fragment>
            <IconButton color="inherit" onClick={handleClick} sx={{ ml:2 }}>
                <Settings fontSize="large" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiSvgIcon-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        }
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>test</MenuItem>
                <Divider />
                <MenuItem onClick={config.toggleThemeLight}>
                    {config.options.lightMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
                    {config.options.lightMode} mode
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default ConfigMenu;