import React, {FC} from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link, NavLink, useNavigate} from "react-router-dom";

type props = {
    pages: Array<{name: string, href: string}>
}

const activeLink ={
    opacity: '70%',
    color:'inherit',
}
const link = {
    textDecoration: 'none',
    color:'inherit',
}

const addActiveStyles = ({isActive}:any)=> isActive? activeLink : link

export const AppMenu:FC<props> = ({pages}:props) => {

    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    sx={{my: 2, color: 'white', display: 'block', m:1}}
                    onClick={()=>navigate(page.href)}
                >
                    <NavLink style={addActiveStyles}
                          to={page.href}>{page.name}
                    </NavLink>
                </Button>
            ))}
        </Box>
    );
};
