import React from 'react';
import {ButtonGroup, FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {filterTypes, sortByTypes} from "../../redux/app/types";
import {setFilter, setSortBy} from "../../redux/app/appSlise";
import {appSelectors} from "../../redux/app/appSelectors";

export const SortBar = () => {

    const dispatch = useAppDispatch()
    const sortBy = useAppSelector(appSelectors.selectSortBy)
    const filter = useAppSelector(appSelectors.selectFilter)

    const changeFilter = (event: SelectChangeEvent) => {
        dispatch(setFilter(event.target.value as filterTypes))
    };

    const sortItems = (sortBy: sortByTypes) => {
        dispatch(setSortBy(sortBy))
    }

    return (
        <Box mb={2} display='flex'>
            <FormControl sx={{width: 170, mr: 1}}>
                <InputLabel>Filter</InputLabel>
                <Select
                    label='Filter'
                    value={filter}
                    onChange={changeFilter}
                    sx={{height: 50}}
                >
                    <MenuItem value={'Title'}>Title</MenuItem>
                    <MenuItem value={'Desc'}>Desc</MenuItem>
                    <MenuItem value={'Category'}>Category</MenuItem>
                </Select>
            </FormControl>

            <ButtonGroup variant="contained" >
                <Button sx={{height: 50}} disabled={sortBy === 'initial'} onClick={()=>sortItems('initial')}>
                    <SouthIcon/>
                </Button>
                <Button sx={{height: 50}} disabled={sortBy === 'reverse'}  onClick={()=>sortItems('reverse')}>
                    <NorthIcon/>
                </Button>
            </ButtonGroup>
            <Button color='success' variant='contained' sx={{height: 50, ml: 1}}>sort</Button>
        </Box>
    );
};

