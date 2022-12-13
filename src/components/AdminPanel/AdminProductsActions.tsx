import React from 'react';
import Button from "@mui/material/Button";
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import Box from "@mui/material/Box";
import NorthIcon from "@mui/icons-material/North";
import {SortBar} from "./SortBar";
import SearchIcon from '@mui/icons-material/Search';
import {AdminSearchField} from "./AdminSearchField";
import {AddProductPanel} from "./AddProductPanel";

export const AdminProductsActions = () => {

    return (
        <Box sx={{width: '100%', display: {xs: 'block', md: 'flex'}, justifyContent: 'space-between'}}>
            <SortBar/>
            <AdminSearchField/>
            <AddProductPanel/>
        </Box>
    );
};

