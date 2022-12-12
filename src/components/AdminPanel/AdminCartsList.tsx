import React from 'react';
import {ButtonGroup, FormControl, InputLabel, Paper, Select, SelectChangeEvent} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {AdminCartItem} from "./AdminCartItem";
import MenuItem from "@mui/material/MenuItem";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import {SortBar} from "./SortBar";


export const AdminCartsList = () => {

    return (
        <Box>
            <SortBar/>
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

