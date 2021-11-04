import React from 'react'
import {NavLink} from 'react-router-dom'
import {Box, AppBar, Toolbar, IconButton, Typography, Link} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ConfigApp from "./configs/ConfigApp"


export const NavBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link color="inherit" href="/">Main</Link>
                    </Typography>
                    <NavLink to="/about">About</NavLink>

                    <ConfigApp />

                </Toolbar>
            </AppBar>
        </Box>
    )
}