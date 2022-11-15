import {createTheme} from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#34343a',
            dark: '#807a7a'
        },
        secondary: {
            main: '#2d2a2a',
        },
        mode: 'dark',
    },
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#474760',
            dark: '#706969'
        },
        secondary: {
            main: '#f6f1f1',

        },
        mode: 'light',
    },
});