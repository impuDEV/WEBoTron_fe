import React from 'react'
import {Box} from "@mui/material";

export const MainPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '800px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            Main
        </Box>

    )
}