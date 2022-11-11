import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {authAPI} from "./API/authAPI";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {brown, deepOrange, teal} from "@mui/material/colors";
import {darkTheme, lightTheme} from "./theme";
import {appSelectors} from "./redux/app/appSelectors";

function App() {
    const theme = useAppSelector(appSelectors.selectTheme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <RouterProvider router={publicRoutes}/>
        </ThemeProvider>
    );
}

export default App;
