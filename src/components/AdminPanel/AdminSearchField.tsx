import React from 'react';
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const AdminSearchField = () => {
    return (
        <FormControl sx={{m: {md: '0 10px 15px 10px', xs: '0 0 10px 0'}, width: {xs: '100%', md: 400}}}>
            <InputLabel htmlFor="outlined-adornment-amount">
                <SearchIcon sx={{mr: 1}}/>
                <span style={{position: 'relative', bottom: 8}}>search product</span>
            </InputLabel>
            <OutlinedInput
                size='small'
                sx={{height: 50}}
                id="outlined-adornment-amount"
                label='________________'
            />
        </FormControl>
    );
};

