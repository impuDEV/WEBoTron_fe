import React from 'react'
import {Box, Button} from "@mui/material";
import Loader from "@/components/Loader";
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "@/redux/appActions";

export const MainPage = () => {
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                }}
            >
                <Button variant="contained" color="primary"
                        onClick={() => dispatch(showLoader())}
                >
                    Показать лоадер
                </Button>
                <Button  variant="contained" color="secondary"
                         onClick={() => dispatch(hideLoader())}
                >
                    Убрать лоадер
                </Button>
            </Box>
            <Loader />
        </React.Fragment>

    )
}