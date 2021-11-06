import React from 'react'
import {IconButton, Menu, MenuItem, Divider, } from "@mui/material";
import {Settings} from "@mui/icons-material";
import {connect} from "react-redux";
import ThemeMenuItem from "@/components/config/ThemeMenuItem";
import {hideConfigMenu, showConfigMenu} from "@/redux/configActions";

class ConfigMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    clickHandler = event => {
        this.props.showConfigMenu(event.currentTarget)
    }

    closeHandler = () => {
        this.props.hideConfigMenu()
    }

    render() {
        return (
        <React.Fragment>
            <IconButton color="inherit" onClick={this.clickHandler} sx={{ ml:2 }}>
                <Settings fontSize="large" />
            </IconButton>
            <Menu
                anchorEl={this.props.anchorEl}
                open={Boolean(this.props.anchorEl)}
                onClose={this.closeHandler}
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
                <ThemeMenuItem />
            </Menu>
        </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    showConfigMenu, hideConfigMenu
}

const mapStateToProps = state => ({
    anchorEl: state.config.anchorEl
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigMenu)