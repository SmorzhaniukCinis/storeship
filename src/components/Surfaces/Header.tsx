import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from '@mui/material/Container';
import {CssBaseline} from "@mui/material";
import {Logo} from "./Logo";
import {HideOnScroll} from "./HideOnScroll";
import {MobileLogo} from "./MobileLogo";
import {AppMenu} from "./AppMenu";
import {AppMenuMobile} from "./AppMenuMobile";
import {SettingMenu} from "./SettingMenu";
import {ThemeSwitch} from "./ThemeSwitch";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {appSelectors} from "../../redux/app/appSelectors";
import {setTheme} from "../../redux/app/appSlise";


const pages = [
    {name: "Electronics", href: 'products/electronics'},
    {name: "jewelery", href: 'products/jewelery'},
    {name: "men's clothing", href: 'products/men-clothing'},
    {name: "women's clothing", href: 'products/women-clothing'}
];

export const Header = () => {

    const isLightTheme = useAppSelector(appSelectors.selectTheme)
    const dispatch = useAppDispatch()

    const changeTheme = () => {
        dispatch(setTheme(!isLightTheme))
    }


    return (
        <Box sx={{height: '10vh'}}>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <ShoppingCartIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                            <Logo/>
                            <AppMenu pages={pages}/>
                            <AppMenuMobile pages={pages}/>
                            <ShoppingCartIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                            <MobileLogo/>
                            <ThemeSwitch sx={{ m: 1 }} onChange={changeTheme} value={isLightTheme}  />
                            <SettingMenu/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </Box>

    );
}



