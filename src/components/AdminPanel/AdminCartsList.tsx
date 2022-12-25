import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {AdminCartItem} from "./AdminCartItem";
import {DatePicker} from "./DatePicker";

type props = {
    searchStr: string
}


export const AdminCartsList:React.FC<props> = ({searchStr}:props) => {

    return (
        <Box>
            <DatePicker/>
            <Grid container spacing={3}>
                <AdminCartItem/>
                <AdminCartItem/>
                <AdminCartItem/>
                <AdminCartItem/>
                <AdminCartItem/>
                <AdminCartItem/>
                <AdminCartItem/>
            </Grid>
        </Box>

    );
};

