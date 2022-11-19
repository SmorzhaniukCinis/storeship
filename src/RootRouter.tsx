import React from 'react';
import {Header} from "./components/Surfaces/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./components/Surfaces/Footer";
import {Container} from "@mui/material";

export const RootRouter = () => {
    return (
        <div>
            <Header/>
            <Container  sx={{minHeight: '75vh', p: {sx: 1}  }}>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    );
};
