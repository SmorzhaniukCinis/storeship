import React from 'react';
import {FormControl, InputLabel, ListSubheader, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {filterTypes} from "../../redux/app/types";
import {setFilter} from "../../redux/app/appSlise";
import {appSelectors} from "../../redux/app/appSelectors";
import {setSortBy} from "../../redux/products/ProductsSlice";
import {SortButton} from "./SortButton";
import {productsSelectors} from "../../redux/products/productsSelectors";

export const SortBar = () => {

    const dispatch = useAppDispatch()
    const sortBy = useAppSelector(productsSelectors.selectSortBy)
    const filter = useAppSelector(appSelectors.selectFilter)

    const changeFilter = (event: SelectChangeEvent) => {
        dispatch(setFilter(event.target.value as filterTypes))
    };




    return (
        <Box mb={2} display='flex' justifyContent='space-between'>
            <FormControl sx={{width: 170, mr: 1}}>
                <InputLabel>Filter</InputLabel>
                <Select
                    label='Filter'
                    value={filter}
                    onChange={changeFilter}
                    sx={{height: 50}}
                >
                    <ListSubheader sx={{pl: 1}}>By Position</ListSubheader>
                    <MenuItem value={'Asc'}>Asc</MenuItem>
                    <MenuItem value={'Desc'}>Desc</MenuItem>
                    <ListSubheader sx={{pl: 1}}> By Categories</ListSubheader>
                    <MenuItem value={'electronics'}>Electronics</MenuItem>
                    <MenuItem value={'jewelery'}>Jewelery</MenuItem>
                    <MenuItem value={"men's clothing"}>Men's clothing</MenuItem>
                    <MenuItem value={"women's clothing"}>Women's clothing</MenuItem>
                </Select>
            </FormControl>

            <SortButton setSortBy={setSortBy} sortBy={sortBy}/>

        </Box>
    );
};

