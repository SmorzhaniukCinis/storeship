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


const pages = [
    {name: "Electronics", href: 'products/electronics'},
    {name: "jewelery", href: 'products/jewelery'},
    {name: "men's clothing", href: 'products/men-clothing'},
    {name: "women's clothing", href: 'products/women-clothing'}
];

export const Header = () => {


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
                            <SettingMenu/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </Box>

    );
}
