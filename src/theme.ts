import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main:'#34343a',
        },
        secondary: {
            main: '#000000',
        },
        mode: 'dark',
    },
});
export const lightTheme = createTheme({
    palette: {
        primary: {
            main:'#474760',
        },
        secondary: {
            main: '#ef4747',

        },
        mode: 'light',
    },
});