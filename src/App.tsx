import React from 'react';
import {useAppSelector} from "./redux/hooks";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "./theme";
import {appSelectors} from "./redux/app/appSelectors";

function App() {
    const isLightTheme = useAppSelector(appSelectors.selectTheme)

    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <CssBaseline />
            <RouterProvider router={publicRoutes}/>
        </ThemeProvider>
    );
}

export default App;
