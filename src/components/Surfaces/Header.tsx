import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {CssBaseline} from "@mui/material";
import {Logo} from "./Logo";
import {HideOnScroll} from "./HideOnScroll";
import {MobileLogo} from "./MobileLogo";
import {AppMenu} from "./AppMenu";
import {AppMenuMobile} from "./AppMenuMobile";
import {SettingMenu} from "./SettingMenu";
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import {CartPage} from "../CartPage/CartPage";
import {CartButton} from "./CartButton";


const pages = [
    {name: "Electronics", href: 'products/electronics'},
    {name: "Jewelry", href: 'products/jewelery'},
    {name: "Men's clothing", href: 'products/men-clothing'},
    {name: "Women's clothing", href: 'products/women-clothing'}
];

export const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <Box sx={{height: '10vh'}}>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <RocketLaunchRoundedIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                            <Logo/>
                            <AppMenu pages={pages}/>
                            <AppMenuMobile pages={pages}/>
                            <RocketLaunchRoundedIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                            <MobileLogo/>
                            <CartButton openCart={openCart}/>
                            <CartPage closeCart={closeCart} isOpen={isCartOpen}/>
                            <SettingMenu/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </Box>

    );
}



