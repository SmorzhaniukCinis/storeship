import React from 'react';
import Box from "@mui/material/Box";
import {SortBar} from "./SortBar";
import {AdminSearchField} from "./AdminSearchField";
import {AddProductPanel} from "./AddProductPanel";

export const AdminProductsActions = () => {

    return (
        <Box sx={{width: '100%', display: {xs: 'block', md: 'flex'}, justifyContent: 'space-between'}}>
            <SortBar/>
            <AdminSearchField label={'product'}/>
            <AddProductPanel/>
        </Box>
    );
};

