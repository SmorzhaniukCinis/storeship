import React from 'react';
import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";
import {Container} from "@mui/material";

export const AppRoot = () => {
    return (
        <div>
            <Header/>
            <Container sx={{minHeight: '75vh'}}>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    );
};
