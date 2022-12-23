import React from 'react';
import {useAppSelector} from "./redux/hooks";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";
import {Backdrop, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./theme";
import {appSelectors} from "./redux/app/appSelectors";

function App() {
    const isLightTheme = useAppSelector(appSelectors.selectIsLightTheme)
    const isLoading = useAppSelector(appSelectors.selectIsLoading)

    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            />
            <RouterProvider router={publicRoutes}/>
        </ThemeProvider>
    );
}

export default App;
