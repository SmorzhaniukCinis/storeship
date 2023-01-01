import React, {useEffect} from 'react';
import {useAppSelector} from "./redux/hooks";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";
import {Backdrop, CircularProgress, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./theme";
import {appSelectors} from "./redux/app/appSelectors";

function App() {
    const isLightTheme = useAppSelector(appSelectors.selectIsLightTheme)
    const isLoading = useAppSelector(appSelectors.selectIsLoading)
    const token = useAppSelector(appSelectors.selectToken)

    useEffect(() => {
        if(token) {

        }
    }, [])

    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <RouterProvider router={publicRoutes}/>
        </ThemeProvider>
    );
}

export default App;
