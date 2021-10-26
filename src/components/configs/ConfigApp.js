import React from 'react'
import {Tooltip, IconButton, Menu, MenuItem} from "@mui/material";
import {Settings} from "@mui/icons-material";
import {setMenuAnchorAction} from "../../store/configReducer";
import {useDispatch, useSelector} from "react-redux";

import LightMode from "./LightMode";
import Typography from "@mui/material/Typography";
import LightTheme from "./LightTheme";

const ConfigApp = () => {
    const dispatch = useDispatch()
    const anchorMenu = useSelector(state => state.config.anchorMenu)
    const open = Boolean(anchorMenu)

    const handleClick = (event) => {
        // console.log('test............')
        dispatch(setMenuAnchorAction(event.currentTarget))
    }

    const handleClose = () => {
        dispatch(setMenuAnchorAction(null))
    }

    return (
        <React.Fragment>
            <Tooltip title="Settings">
                <IconButton size="small" color="inherit" onClick={handleClick}>
                    <Settings />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorMenu}
                open={open}
                onClose={handleClose}
            >
                <LightTheme />
                {/*<Typography sx={{*/}
                {/*    display: 'flex',*/}
                {/*    flexDirection:'row'*/}
                {/*}}>*/}
                {/*    /!*<LightMode /><span>Light mode</span>*!/*/}
                {/*    /!*light mode<Brightness4Icon />*!/*/}
                {/*</Typography>*/}
            </Menu>
        </React.Fragment>
    )
}

export default ConfigApp