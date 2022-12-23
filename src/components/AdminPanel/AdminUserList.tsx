import React from 'react';
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {SortBar} from "./SortBar";
import {AdminUserItem} from "./AdminUserItem";
import {AdminSearchField} from "./AdminSearchField";

type props = {
    searchStr: string
}


export const AdminUserList:React.FC<props> = ({searchStr}:props) => {
    return (
        <Box sx={{p: {md: '0 10%', xs: 0}}}>
            <Box display={{md: 'flex', xs: 'block'}} justifyContent='space-between' alignItems='center'>
                <SortBar/>
                <AdminSearchField/>
            </Box>
            <AdminUserItem/>
            <AdminUserItem/>

        </Box>
    );
};

